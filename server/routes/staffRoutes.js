// routes/staffRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

// POST route to create a new user
router.post('/staff', async (req, res) => {
    try {
        // Create a new user instance with the data from the request body
        const newUser = new User(req.body);
        // Save the user to the database
        await newUser.save();
        // Respond with a success message
        res.status(201).send('User created successfully!');
    } catch (error) {
        // If there's an error, respond with an error message
        console.error('Error creating user:', error);
        res.status(500).send('An error occurred while creating the user.');
    }
});

module.exports = router;
