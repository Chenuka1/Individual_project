// AuthController.js
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

// Controller function to handle user login
const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user based on email
        const user = await User.findOne({ email });

        // If user doesn't exist, return error
        if (!user) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        // Compare passwords
        const isPasswordMatch = await bcrypt.compare(password, user.password);

        // If passwords don't match, return error
        if (!isPasswordMatch) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, config.jwtSecret, { expiresIn: '1h' });

        // Send response with token
        res.status(200).json({ token });

    } catch (error) {
        console.error('Error signing in:', error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = loginController;
