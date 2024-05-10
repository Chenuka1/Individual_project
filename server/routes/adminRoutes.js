


// Assuming you have already defined your patient model and connected to your MongoDB database
const express = require('express');
const router = express.Router();
const Patient = require('../models/patientModel'); // Import your patient model

// Route to fetch and return the list of patients
router.get('/patients', async (req, res) => {
  try {
    // Query the database to fetch the list of patients
    const patients = await Patient.find();
    res.json(patients); // Send the list of patients as JSON response
  } catch (error) {
    console.error('Error fetching patients:', error);
    res.status(500).json({ error: 'Failed to fetch patients' });
  }
});

module.exports = router;
