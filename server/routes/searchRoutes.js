// routes/searchRoutes.js
const express = require('express');
const router = express.Router();
const Patient = require('../models/patientModel'); // Import your Patient model or schema
const CryptoJS= require("crypto")

// Search for a patient by birth certificate ID
router.get('/', async (req, res) => {
  try {
    const { id } = req.query;
    // Assuming you want to find a patient by birth certificate ID
    const patient = await Patient.findOne({ birthCertificateId: id });
    if (patient) {
      res.status(200).json(patient);
    } else {
      res.status(404).json({ message: 'Patient not found' });
    }
  } catch (error) {
    console.error('Error searching for patient:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

module.exports = router;
