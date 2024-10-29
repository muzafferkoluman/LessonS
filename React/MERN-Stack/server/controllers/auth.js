const AuthSchema = require("../models/auth");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await AuthSchema.findOne({ email });
    if (user) {
      return res.status(500).json({ message: "Email already exists" });
    }
    if (password.length < 6) {
      return res
        .status(500)
        .json({ message: "Password must be at least 6 characters" });
    }
  } catch (error) {}
};

const login = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = { register, login };
