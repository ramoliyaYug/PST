const express = require("express");
const app = express();
const http = require("http");
const httpServer = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(httpServer, {
    cors: {
        origin: "*",
    },
});

io.on("connection" ,(socket)=>{
    console.log(`new client connected with id: ${socket.id}`);

    socket.on("room:join",(room)=>{
        socket.join(room);
        console.log(`client joined room: ${room} with id: ${socket.id}`);
    })

    socket.on("disconnect", () => {
        console.log(`client disconnected with id: ${socket.id}`);
    });
})

app.get("/health", (req, res) => {
    console.log("Server is up and running");
    res.json({ message: "Server is up and running" });
});

app.listen(5555, () => {
    console.log("Server running at http://localhost:5555/");
});