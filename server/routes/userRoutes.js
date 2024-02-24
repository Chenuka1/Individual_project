// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/userModel'); // Import your User model or schema

// Create a new user
router.post('/create', async (req, res) => {
  try {
    const userData = req.body; // Assuming you've used express.json() middleware
    const newUser = new User(userData);
    await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

module.exports = router;
