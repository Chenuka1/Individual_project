// authController.js
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

const authController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user based on email
        const user = await User.findOne({ email });

        // If user doesn't exist or password is incorrect, return error
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        // Set user data in session
        req.session.user = user;

        // Set a cookie to maintain session
        res.cookie('user_id', user._id, { maxAge: 900000, httpOnly: true });

        // Send response with user data or token if needed
        res.status(200).json({ user });

    } catch (error) {
        console.error('Error signing in:', error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = authController;
