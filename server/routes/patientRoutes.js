// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const Patient = require('../models/patientModel'); // Import your Patient model or schema

// Create a new patient
router.post('/create', async (req, res) => {
  try {
    const patientData = req.body; // Assuming you've used express.json() middleware
    const newPatient = new Patient(patientData);
    await newPatient.save();
    res.status(201).json({ message: 'Patient created successfully', patient: newPatient });
  } catch (error) {
    console.error('Error creating patient:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

module.exports = router;
