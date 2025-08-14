// business logic

const { getTasks, setTasks } = require("./fs");

const getAllTasks = (req, res) => {
    const search = req.query.search;
    console.log(search);

    if(search){
        const data = getTasks();
        const todos = data.todos;
        const filteredTodos = todos.filter(task => task.task.toLowerCase().includes(search.toLowerCase()));
        res.json({
            message:"List of All tasks",
            response: filteredTodos
        })
    }

    let data = getTasks()
    const todos = data.todos;
    res.json({
        message:"List of All tasks",
        response: todos
    })
}

const createNewTask = (req, res) =>{
    const body = req.body;
    console.log(body);

    const data = getTasks();
    console.log(data);
    const todos = data.todos;
    console.log(todos);

    // write
    const newId = Number(todos[todos.length -1].id) + 1;
    const newTask = {id: newId, ...body};
    todos.push(newTask);
    setTasks(data);

    res.json({
        message:"New task Created",
        response: getTasks().todos
    })

}

const updateStatusOfTask = (req, res) =>{
    // req.params
    const id = req.params.id;
    console.log(id);

    const data = getTasks();
    const todos = data.todos;
    const updatedTask = req.body;
    const taskToUpdate = todos.find(task => task.id === Number(id));
    if(!taskToUpdate){
        res.json({
            message:"Task not found"
        })
    }else{
        taskToUpdate.status = updatedTask.status;
        setTasks(data);
        res.json({
            message:"Task Updated",
            response: getTasks().todos
        })
    }
}

const deleteTask = (req, res)=>{
    const id = req.params.id;
    const data = getTasks();
    const todos = data.todos;
    const taskToDelete = todos.find(task => task.id === Number(id));
    if(!taskToDelete){
        res.json({
            message:"Task not found"
        })
    }else{
        todos.splice(todos.indexOf(taskToDelete), 1);
        setTasks(data);
        res.json({
            message:"Task Deleted",
            response: getTasks().todos
        })
    }
}

module.exports = {getAllTasks, createNewTask, updateStatusOfTask, deleteTask}