const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/userModel');

const generateToken = (user) => {
    const payload = {
        userId: user._id,
        email: user.email,
        // Add any additional data you want to include in the token payload
    };
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// POST route to handle user login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            // If user is not found, respond with an error message
            return res.status(404).send('User not found');
        }

        // Check if the password matches
        if (password !== user.password) {
            // If password doesn't match, respond with an error message
            return res.status(401).send('Incorrect password');
        }

        // Generate a JWT token
        const token = generateToken(user);

        // If email and password are correct, respond with the user data and token
        res.json({ user, token });
        console.log(token);
    } catch (error) {
        // If there's an error, respond with an error message
        console.error('Error signing in:', error);
        res.status(500).send('An error occurred while signing in.');
    }
});

module.exports = router;
