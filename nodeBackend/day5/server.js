// server.js

const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json()); // built-in body parser

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/yugdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB connection error:", err));

// Define User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email1: String,
  marks: Number,
  interest: String,
  role: String,
});

// User Model
const User = mongoose.model("User", userSchema);

// Pagination Endpoint
app.get("/users", async (req, res) => {
  try {
    // Query params ?page=1&limit=5
    const page = parseInt(req.query.page) || 1; // default page = 1
    const limit = parseInt(req.query.limit) || 2; // default limit = 2
    const skip = (page - 1) * limit;

    const users = await User.find().skip(skip).limit(limit);

    const totalUsers = await User.countDocuments();
    const totalPages = Math.ceil(totalUsers / limit);

    res.json({
      totalUsers,
      totalPages,
      currentPage: page,
      users,
    });
  } catch (err) {
    res.status(500).json({ error: "Error fetching users with pagination" });
  }
});

// Start server
const PORT = 5555;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
