// routes/notifications.js

const express = require('express');
const router = express.Router();
const Patient = require('../models/patientModel');


// GET endpoint to fetch notifications
router.get('/notifications', async (req, res) => {
  try {
    // Fetch notifications from the database (e.g., upcoming vaccination dates)
    const notifications = await Patient.find({ upcomingVaccine: { $exists: true } });

    // Format notifications as needed
    const formattedNotifications = notifications.map(notification => ({
      title: 'Upcoming Vaccination',
      body: `${notification.username} has an upcoming vaccination for ${notification.upcomingVaccine} on ${new Date(notification.upcomingvaccinedate).toLocaleDateString()}`
    }));

    // Send formatted notifications as response
    res.json(formattedNotifications);
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
