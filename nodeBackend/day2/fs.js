const fs = require("fs");

const data = JSON.parse(fs.readFileSync("./db.json","utf-8"))
console.log(data)
console.log(data.todos);


const newTask = {"id" : 4, "task" : "task 4", "status": "not started"};
data.todos.push(newTask);
fs.writeFileSync("./db.json",JSON.stringify(data));


export function getTasks(){
    var data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    return data.todos;
}

function addTask(task){
    var data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    data.todos.push(task);
    fs.writeFileSync("./db.json",JSON.stringify(data));
}