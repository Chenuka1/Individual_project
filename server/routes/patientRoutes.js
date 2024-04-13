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

//route to fetch patient medical histroy

router.get('',async(req,res)=>{

  const {birthId}= req.params;
  





})
// Function to fetch medical history by birth certificate ID
const getMedicalHistory = async (birthCertificateId) => {
  try {
    // Find the patient by birth certificate ID and select only the medical history fields
    const patient = await Patient.findOne(
      { birthCertificateId: birthCertificateId },
      { pastDiseases: 1, allergies: 1, appointmentDate: 1, medications: 1,surgery:1 }
    );
    return patient;
  } catch (error) {
    console.error('Error fetching medical history:', error);
    throw error;
  }
};

// GET route to fetch a patient's medical history by birth certificate ID
router.get('/:birthCertificateId/medical-history', async (req, res) => {
  const { birthCertificateId } = req.params;
  try {
    const medicalHistory = await getMedicalHistory(birthCertificateId);
    if (!medicalHistory) {
      return res.status(404).json({ error: 'Medical history not found' });
    }
    res.json(medicalHistory);
  } catch (error) {
    console.error('Error fetching medical history:', error);
    res.status(500).json({ error: 'Failed to fetch medical history' });
  }
});



module.exports = router;
