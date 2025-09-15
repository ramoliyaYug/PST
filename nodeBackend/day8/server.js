const express = require("express");
const StudentModel = require("./student.model");
const connectToDB = require("./mongoose.config");
const Redis = require("ioredis");
const app = express();
const redis = new Redis();

app.use(express.json());

connectToDB();
redis.on("connect",()=>{
    console.log("Redis connected");
})

redis.on("error", (err)=>{
    console.log(err);
})

app.get("/health", (req, res)=>{
    res.json({message:"Server is up and running"});
})

app.post("/students/:studentId",async (req,res)=>{
    const studentId = req.params.studentId;
    const {marks} = req.body;
    console.log(`studentId: ${studentId}, marks: ${marks}`);
    try{
        const student = await StudentModel.insertOne({studentId,marks});
        return res.status(200).send({
            result:"student marked",
            message:`studentId: ${studentId}, marks: ${marks}`
        })
    }catch(err){
        return res.status(500).send({
            result:"error",
            message:err.message
        })
    }
    
})

app.get("/students/:studentId",async(req,res)=>{
    const studentId = req.params.studentId;
    try{

        const cachedMarks = await redis.get(studentId);
        if(cachedMarks){
            console.log("cache hit")
            return res.status(200).send({
                result:"student found through cache-cache hit",
                message:`studentId: ${studentId}, marks: ${cachedMarks}`
            })
        }

        console.log("cache miss")
        const student = await StudentModel.findOne({studentId});
        await redis.set(studentId,student.marks);
        return res.status(200).send({
            result:"student found through db-cache miss",
            message:`studentId: ${studentId}, marks: ${student.marks}`
        })
    }catch(err){
        return res.status(500).send({
            result:"error",
            message:err.message
        })
    }
})

app.listen(5555, () => {
    console.log('Server running at http://localhost:5555/');
});