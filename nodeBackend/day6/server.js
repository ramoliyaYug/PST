require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

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
  password: String, // hashed password
});

const User = mongoose.model("User", userSchema);

// ---------- SIGNUP ----------
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ msg: "User already exists" });

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

    // generate JWT
    const token = jwt.sign({ id: user._id }, process.env.JSON_SECRET_KEY, {
      expiresIn: "1h",
    });

    // store JWT in cookie
    res.cookie("token", token, {
      httpOnly: true, // prevents JS access (secure against XSS)
      secure: false, // set true if HTTPS
      sameSite: "strict",
    });

    res.json({ msg: "Login successful ✅" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------- MIDDLEWARE ----------
const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.token; // get token from cookie
    if (!token) return res.status(401).json({ msg: "No token, access denied" });

    const verified = jwt.verify(token, process.env.JSON_SECRET_KEY);
    req.user = verified; // attach user info to request
    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid or expired token" });
  }
};

// ---------- PROTECTED ROUTE ----------
app.get("/profile", authMiddleware, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json({ msg: "Profile data ✅", user });
});

// Start server
app.listen(5555, () => {
  console.log("Server running on port 5555");
});
