// backend: routes/userRoutes.js
const express = require("express");
const router = express.Router();
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

// Route to handle form submission
router.post("/signup", async (req, res) => {
    try {
        const { fullName, email, password, contact, registeredHospital } = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance
        const newUser = new User({ fullName, email, password: hashedPassword, contact, registeredHospital });

        // Save the user to the database
        await newUser.save();
        
        res.status(201).json({ message: 'User signed up successfully!' });
    } catch (error) {
        console.error('Error signing up:', error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
