const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../Model/User.js");
const jwt = require("jsonwebtoken")

// Add data to the DB Signup
router.post("/signup", async (req, res) => {
  try {
    const data = req.body;
    const emailverify = await User.findOne({ email: data.email });
    if (emailverify) {
      res.json("User already exists plz Login");
    } else {
      const hashedpass = bcrypt.hashSync(data.password, 10);
      const user = new User(data);
      user.password = hashedpass;
      const save = await user.save();
      res.status(200).send(save);
    }
  } catch (error) {
    res.status(500).send("error login details");
  }
});

// login to verify the login crenditals

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // res.status(200).json({ message: "Login successful!" });
    const token = jwt.sign({ id:user._id},process.env.SCEREATE_KEY,{expiresIn:"2d"})
    res.json({ token, message: "Login successful" });
    
    // localStorage.setItem("token", token);// it will work only in frontend



  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
});




module.exports = router;
