// routes/patientRoutes.js
const express = require('express');
const router = express.Router();
const Patient = require('../models/patientModel'); // Import your Patient model or schema

// Function to update medical history
const updateMedicalHistory = async (birthCertificateId, medicalHistoryData) => {
  try {
      const updatedPatient = await Patient.findOneAndUpdate(
          { birthCertificateId: birthCertificateId },
          { $set: medicalHistoryData },
          { new: true }
      );
      return updatedPatient;
  } catch (error) {
      console.error('Error updating medical history:', error);
      throw error;
  }
};

// POST route to update a patient's medical history
router.put('/:birthCertificateId/medical-history', async (req, res) => {
  const { birthCertificateId } = req.params;
  const medicalHistoryData = req.body;
  try {
      const updatedPatient = await updateMedicalHistory(birthCertificateId, medicalHistoryData);
      res.json(updatedPatient);
  } catch (error) {
      console.error('Error updating medical history:', error);
      res.status(500).json({ error: 'Failed to update medical history' });
  }
});

// Create a new patient
router.post('/create', async (req, res) => {
  try {
    const patientData = req.body;
    const newPatient = new Patient(patientData);
    await newPatient.save();
    res.status(201).json({ message: 'Patient created successfully', patient: newPatient });
  } catch (error) {
    console.error('Error creating patient:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});



module.exports = router;
