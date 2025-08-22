require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const app = express();

// Middleware to parse JSON (no body-parser needed, express has it built-in)
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/authdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Schema for Users
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String, // will be hashed
});

const User = mongoose.model("User", userSchema);

// ---------- SIGNUP ----------
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ msg: "User already exists" });

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // save new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ msg: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------- LOGIN ----------
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User not found" });

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    // simulate token/session (in real apps use JWT)
    const fakeToken = `${user._id}-${new Date().getTime()}`;

    res.json({ msg: "Login successful", token: fakeToken });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------- MIDDLEWARE ----------
const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    if (!token) return res.status(401).json({ msg: "No token, access denied" });

    // just checking if token looks like our fake one
    if (!token.includes("-")) return res.status(401).json({ msg: "Invalid token" });

    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ---------- PROTECTED ROUTE ----------
app.get("/profile", authMiddleware, async (req, res) => {
  res.json({ msg: "This is a protected route, you are authenticated ✅" });
});

// Start server
app.listen(5555, () => {
    console.log("Server running on port 3000")
});
