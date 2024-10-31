const AuthSchema = require("../models/auth");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // User presence check
    const user = await AuthSchema.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Password length check
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    // Email verification
    if (!isEmail(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }

    // Password hashing
    const passwordHash = await bcrypt.hash(password, 12);

    // Create a new user
    const newUser = await AuthSchema.create({
      username,
      email,
      password: passwordHash,
    });

    // Token creation
    const token = jwt.sign({ id: newUser._id }, "SECRET_KEY", {
      expiresIn: "1h",
    });

    res.status(201).json({
      status: "OK",
      newUser,
      message: "User created successfully",
      token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Finding users
    const user = await AuthSchema.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Email not found" });
    }

    // Password verification
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Token creation
    const token = jwt.sign({ id: user._id }, "SECRET_KEY", {
      expiresIn: "1h",
    });

    res.status(200).json({
      status: "OK",
      user,
      token,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Email verification function
function isEmail(emailAddress) {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(emailAddress); // Returns true if email is valid
}

module.exports = { register, login };
