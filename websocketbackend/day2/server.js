const express = require("express");
const app = express();
const http = require("http");
const httpServer = http.createServer(app); // create server
const { Server } = require("socket.io");

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(`new client connected with id: ${socket.id}`);

  socket.on("room:join", (room) => {
    socket.join(room);
    console.log(`client joined room: ${room} with id: ${socket.id}`);
    socket.emit("room:joined", room);
    socket.to(room).emit("chat:new", {
      id: "SERVER",
      text: `new client with id: ${socket.id} joined room: ${room}`,
    });
  });

  socket.on("chat:send", ({ room, msg }) => {
    if (!room || !msg) return;
    if (room.trim() === "" || msg.trim() === "") return;
    console.log(`${room} - ${msg} - ${socket.id}`);
    io.to(room).emit("chat:new", {
      id: socket.id,
      text: msg,
    });
  });

  socket.on("disconnect", () => {
    console.log(`client disconnected with id: ${socket.id}`);
  });
});

// health endpoint
app.get("/health", (req, res) => {
  res.json({ message: "Server is up and running" });
});

// ✅ Start the httpServer (not app.listen)
httpServer.listen(5555, () => {
  console.log("Server running at http://localhost:5555/");
});
