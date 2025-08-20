// server.js

const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// ---------------------- SCHEMAS & MODELS ----------------------

// User Schema (can be student or instructor)
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: { type: String, enum: ["student", "instructor"], required: true }
});

// Course Schema (linked to instructor)
const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  instructorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

// Enrollment Schema (links student and course)
const enrollmentSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" }
});

// Models
const User = mongoose.model("User", userSchema);
const Course = mongoose.model("Course", courseSchema);
const Enrollment = mongoose.model("Enrollment", enrollmentSchema);

// ---------------------- ROUTES ----------------------

// Health Check
app.get("/health", (req, res) => {
  res.json({ message: "LMS Server is up and running" });
});

// -------- Users --------

// Create User
app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json({ message: "User created", user });
  } catch (err) {
    res.status(500).json({ error: "Error creating user" });
  }
});

// Get All Users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Error fetching users" });
  }
});

// -------- Courses --------

// Create Course (must provide instructorId)
app.post("/courses", async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.json({ message: "Course created", course });
  } catch (err) {
    res.status(500).json({ error: "Error creating course" });
  }
});

// Get All Courses with Instructor Info
app.get("/courses", async (req, res) => {
  try {
    const courses = await Course.find().populate("instructorId", "name email role");
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: "Error fetching courses" });
  }
});

// -------- Enrollments --------

// Enroll Student in Course
app.post("/enrollments", async (req, res) => {
  try {
    const enrollment = await Enrollment.create(req.body); // needs studentId + courseId
    res.json({ message: "Enrollment created", enrollment });
  } catch (err) {
    res.status(500).json({ error: "Error creating enrollment" });
  }
});

// Get All Enrollments with Student & Course Data
app.get("/enrollments", async (req, res) => {
  try {
    const enrollments = await Enrollment.find()
      .populate("studentId", "name email role")
      .populate("courseId", "title description");
    res.json(enrollments);
  } catch (err) {
    res.status(500).json({ error: "Error fetching enrollments" });
  }
});

// Get Enrollments for a Specific Student
app.get("/users/:userId/enrollments", async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ studentId: req.params.userId })
      .populate("courseId", "title description");
    res.json(enrollments);
  } catch (err) {
    res.status(500).json({ error: "Error fetching student enrollments" });
  }
});

app.get("/users/:userId/courses", async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ studentId: req.params.userId })
      .populate("courseId", "title description");
    res.json(enrollments);
  } catch (err) {
    res.status(500).json({ error: "Error fetching student enrollments" });
  }
});

app.get("/courses/:courseId/users", async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ courseId: req.params.courseId })
      .populate("studentId", "name email role");
    res.json(enrollments);
  } catch (err) {
    res.status(500).json({ error: "Error fetching course enrollments" });
  }
});

// ---------------------- DB CONNECTION ----------------------

const connectToDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/lmsdb");
    console.log("Connected to LMS DB");
  } catch (error) {
    console.error("DB Connection Error:", error);
  }
};

// ---------------------- START SERVER ----------------------

app.listen(5555, () => {
  console.log("LMS Server running at http://localhost:5555/");
  connectToDb();
});
