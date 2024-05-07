//Routes/smsRoutes
const express = require('express');
const router = express.Router();
const Patient = require('../models/patientModel');
const MessagingService = require('../services/TwilioService');

// Endpoint to trigger sending messages
router.post('/send-sms', async (req, res) => {
    try {
        // Calculate the date one week before the upcoming vaccine date
        const reminderDate = new Date();
        reminderDate.setDate(reminderDate.getDate() + 1); // Add 1 days to the current date

        // Fetch patients with upcoming vaccines from the database
        const patientsWithPendingVaccines = await Patient.find({
            upcomingvaccinedate: reminderDate, // Find patients with the upcomingvaccinedate matching the reminder date
            upcomingvaccinestatus: 'pending' // Find patients with pending vaccines
        });

        // Iterate through patients and send SMS reminders
        for (const patient of patientsWithPendingVaccines) {
            await MessagingService.sendSMS(patient.contactNumber, `Dear ${patient.fullName}, you have an upcoming vaccine on ${patient.upcomingvaccinedate}. Please remember to attend.`);
        }

        res.status(200).json({ message: 'SMS reminders sent successfully' });
    } catch (error) {
        console.error("Error sending message:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
