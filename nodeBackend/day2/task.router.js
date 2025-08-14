const express = require("express");
const { getAllTasks, createNewTask, updateStatusOfTask, deleteTask } = require("./task.controller");
const taskRouter = express.Router();

const validBodyCheckerMiddleware = (req, res, next) => {
    if(!req.body.task || !req.body.status){
        res.send({
            message:"Please provide task and status"
        })
    }
    next();
}

taskRouter.get("/", getAllTasks)

taskRouter.post("/", validBodyCheckerMiddleware, createNewTask);

// change the status of task
taskRouter.patch("/:id", updateStatusOfTask);

taskRouter.delete("/:id", deleteTask);



module.exports = {taskRouter};