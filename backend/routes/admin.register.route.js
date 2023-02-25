const express = require('express');
const bcrypt = require('bcryptjs');
const Admin = require('../model/admin.model');
const jwt = require("jsonwebtoken");

const adminRouter = express.Router();

adminRouter.post('/register', async (req, res) => {
  const { firstname, lastname, username, mobile, email, password } = req.body;

  try {
    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new admin
    const newAdmin = new Admin({ firstname, lastname, username, mobile, email, password: hashedPassword });
    await newAdmin.save();

    res.status(201).json({ message: 'Admin created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

adminRouter.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if admin exists
    const admin = await Admin.findOne({ username });
    console.log(admin)
    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials admin' });
    }

    // Check password
    const isMatch = bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials password' });
    }

    // Set session or token
    let token = jwt.sign({ adminId:admin._id }, 'firstcry');
    res.status(200).json({ message: 'Logged in successfully', "token" : token});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = { adminRouter };
