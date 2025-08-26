const express = require("express");
const http = require("http");
const {Server} = require("socket.io")

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer,{
    cors: {origin: "*"}
});

app.get("/health", (req, res)=>{
    console.log("Server is up and running")
    res.json({message:"Server is up and running"});
})

io.on("connection",(socket)=>{
    console.log(`new client connected with id: ${socket.id}`);

    socket.on("chat:send",(msg)=>{
        console.log(`new message is recieved from ${socket.id} with message: ${msg}`);
        io.emit("chat:new", {text : msg, id: socket.id})
    })

    socket.on("disconnect", ()=>{
        console.log(`client disconnected with id: ${socket.id}`);
    })
})

const PORT = 5555;
httpServer.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});