const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("./schema"); // Import User model

const app = express();
const port = process.env.PORT || 5000;
const SECRET_KEY = process.env.SECRET_KEY || "mysecretkey"; // Use env variable

let tok=false

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Database connected"))
  .catch((err) => console.log("❌ Database connection error:", err));

/** 
 *  ✅ Signup Route 
 */
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "❌ User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simulate delay (optional)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Create new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "✅ User registered successfully!" });
  } catch (error) {
    console.error("❌ Signup error:", error);
    res.status(500).json({ message: "❌ Error signing up", error });
  }
});

/** 
 *  ✅ Login Route 
 */
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "❌ Invalid email or password" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "❌ Invalid email or password" });
    }

    // Generate JWT Token
    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1h" });

    // Store token in the database
    user.token = token;
    tok=true;
    await user.save();

    res.json({ message: "✅ Login successful!", tok });
  } catch (error) {
    console.error("❌ Login error:", error);
    res.status(500).json({ message: "❌ Error logging in", error });
  }
});

/** 
 *  ✅ Logout Route 
 */
// app.get("/logout", async (req, res) => {
//   const token = req.headers.authorization; // Get token from headers

//   try {
//     if (!token) {
//       return res.status(401).json({ message: "❌ No token provided" });
//     }

//     // Find user by token
//     let user = await User.findOne({ token });

//     if (!user) {
//       return res.status(400).json({ message: "❌ Invalid token" });
//     }

//     // Remove token from database
//     await User.updateOne({ token }, { $unset: { token: "" } });

//     res.json({ message: "✅ Logout successful!" });
//   } catch (error) {
//     console.error("❌ Logout error:", error);
//     res.status(500).json({ message: "❌ Error logging out", error });
//   }
// });

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
