const express = require("express");
const app = express();


function ErrorHandlerMiddleWare(err,req,res,next){
    console.error(err.stack);
    res.status(500).json({
        success : false,
        message : err.message
    })
}
app.use(express.json());
app.use("/profile" , (req, res)=>{
    try{
        const user = null;
        res.send(user.profilePic)
    }catch(err){
        throw new Error(err.message)
    }
})

app.use("/user" , (req, res)=>{
    try{
        res.send(req.body.name)
    }catch(err){
        res.status(500).json({
            success : false,
            message : err.message
        })
    }
})

app.use(ErrorHandlerMiddleWare);

app.listen(5555, () => {
    console.log("Server running at http://localhost:5555/");
});