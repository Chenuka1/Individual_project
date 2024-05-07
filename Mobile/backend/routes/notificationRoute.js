//routes/notification
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Patient = require('../models/patientModel');

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }

    req.userId = decoded.userId;
    next();
  });
};

// GET endpoint to fetch notifications
router.get('/notifications', verifyToken, async (req, res) => {
  try {
    // Fetch notifications for the authenticated patient from the database
    const notifications = await Patient.find({ _id: req.userId, upcomingVaccine: { $exists: true } });

    // Format notifications as needed
    const formattedNotifications = notifications.map(notification => ({
      title: 'Upcoming Vaccination',
      body: `your baby ${notification.username} has an upcoming vaccination for ${notification.upcomingVaccine} on ${new Date(notification.upcomingvaccinedate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`
    }));

    // Send formatted notifications as response
    res.json(formattedNotifications);
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
