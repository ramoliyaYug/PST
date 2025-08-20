// server.js

const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// ---------------------- SCHEMAS & MODELS ----------------------

// User Schema (no address here)
const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

// Address Schema (linked to User by userId)
const addressSchema = new mongoose.Schema({
  houseNumber: String,
  city: String,
  zipCode: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

// Models
const User = mongoose.model("User", userSchema);
const Address = mongoose.model("Address", addressSchema);

// ---------------------- ROUTES ----------------------

// Health check
app.get("/health", (req, res) => {
  res.json({ message: "Server is up and running" });
});

// Create User
app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json({ message: "User created", user });
  } catch (err) {
    res.status(500).json({ error: "Error creating user" });
  }
});

// Create User + Addresses in one request
app.post("/createbothatonce", async (req, res) => {
  try {
    const { name, email, addresses } = req.body;

    // Step 1: Create the user
    const user = await User.create({ name, email });

    // Step 2: Create addresses with userId linked to new user
    let createdAddresses = [];
    if (addresses && Array.isArray(addresses)) {
      createdAddresses = await Address.insertMany(
        addresses.map(addr => ({
          ...addr,
          userId: user._id
        }))
      );
    }

    // Step 3: Return combined response
    res.json({
      message: "User and addresses created successfully",
      user: user,
      addresses: createdAddresses
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error creating user and addresses" });
  }
});


// Get full user data with all addresses
app.get("/users/:userId", async (req, res) => {
  try {
    // Step 1: Get the user
    const user = await User.findById(req.params.userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Step 2: Get all addresses of this user
    const addresses = await Address.find({ userId: req.params.userId });

    // Step 3: Combine user + addresses into one response
    res.json({
      ...user.toObject(),
      addresses: addresses
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching user with addresses" });
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

// Create Address for a User
app.post("/address", async (req, res) => {
  try {
    const address = await Address.create(req.body); // req.body must include userId
    res.json({ message: "Address created", address });
  } catch (err) {
    res.status(500).json({ error: "Error creating address" });
  }
});


//get all address
app.get("/addresses", async (req, res) => {
  try {
    const addresses = await Address.find();
    res.json(addresses);
  } catch (err) {
    res.status(500).json({ error: "Error fetching addresses" });
  }
});

// Get All Addresses of a User
app.get("/users/:userId/addresses", async (req, res) => {
  try {
    const addresses = await Address.find({ userId: req.params.userId });
    res.json(addresses);
  } catch (err) {
    res.status(500).json({ error: "Error fetching addresses" });
  }
});

// ---------------------- DB CONNECTION ----------------------

const connectToDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/embeddeddb");
    console.log("Connected to DB");
  } catch (error) {
    console.error("DB Connection Error:", error);
  }
};

// ---------------------- START SERVER ----------------------

app.listen(5555, () => {
  console.log("Server running at http://localhost:5555/");
  connectToDb();
});
