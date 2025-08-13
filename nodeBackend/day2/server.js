const fs = require("fs");
const express = require("express");
const app = express();

const PORT = 4800; 

app.use(express.json());

app.get("/health",(req,res)=>{
    res.json({message:"server is up and running"})
})

app.get("/tasks",(req,res)=>{
    var data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    const todos = data.todos;
    res.json({
        message:"List Of All Todos",
        response : todos
    })
})

app.post("/tasks",(req,res)=>{
    var data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    const todos = data.todos;
    todos.push(req.body);
    fs.writeFileSync("./db.json",JSON.stringify(data));
    res.json({
        message:"Task Added Successfully",
        response : todos
    })
})

app.delete("/tasks/:id",(req,res)=>{
    var data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    var todos = data.todos;
    todos = todos.filter(todo => todo.id !== parseInt(req.params.id));
    fs.writeFileSync("./db.json",JSON.stringify(data));
    res.json({
        message:"Task Deleted Successfully",
        response : todos
    })
})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})