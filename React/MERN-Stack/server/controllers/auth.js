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
    const passwordHash = await bcrypt.hash(password, 12);

    if (isEmail(email)) {
      return res.status(500).json({ message: "Invalid email" });
    }

    const newUser = await AuthSchema.create({
      username,
      email,
      password: passwordHash,
    });
    const token = jwt.sign({ id: newUser._id }, "SECRET_KEY", {
      expiresIn: "1h",
    });

    res.status(201).json({
      status: "OK",
      newUser,
      message: "User created successfully",
      token,
    });
  } catch (error) {}
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await AuthSchema.findOne({ email });
    if (!user) {
      return res.status(500).json({ message: "Email not found" });
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res.status(500).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: user._id }, "SECRET_KEY", {
      expiresIn: "1h",
    });

    res.status(200).json({
      status: "OK",
      user,
      token,
    });

  } catch (error) {
    return res.status(500).json({msg:error.message})
  }
};

function isEmail(emailAddress) {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailAddress.match(regex)) return true;
  else return false;
}

module.exports = { register, login };
