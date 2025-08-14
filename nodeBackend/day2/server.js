const express = require("express");
const app = express();
const fs = require("fs");
const { getTasks, setTasks } = require("./fs");
const { taskRouter } = require("./task.router");
const ratelimit = require("express-rate-limit");

// Task : Create Task Manager using express and FS Module


app.use(express.json()); // this allows json 

const loggerMiddleware = (req, res, next)=>{
    const log = `${new Date().toUTCString()} : ${req.method} ${req.url}\n`;
    fs.appendFileSync("logs.txt", log);
    next();
}

app.use(loggerMiddleware);

const limiter = ratelimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
	// store: ... , // Redis, Memcached, etc. See below.
})

app.use(limiter);

app.get("/health", (req, res)=>{
    console.log("Server is up and running")
    res.json({message:"Server is up and running"});
})


app.use("/tasks", taskRouter);


const PORT = 4800;
app.listen(PORT, ()=>{
    console.log(`Server started on ${PORT}`);
})