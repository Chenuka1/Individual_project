const express = require('express');
const router = express.Router();
const Patient = require('../models/patientModel');

// Fetch upcoming vaccine details by birthCertificateId
router.get('/vaccine/:birthCertificateId/upcoming-vaccines', async (req, res) => {
  const { birthCertificateId } = req.params;

  try {
    const patient = await Patient.findOne({ birthCertificateId });
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }
    res.status(200).json(patient.upcomingVaccine);
  } catch (error) {
    console.error('Error fetching upcoming vaccine details:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update upcoming vaccine details by birthCertificateId
router.put('/vaccine/:birthCertificateId/upcoming-vaccines', async (req, res) => {
  const { birthCertificateId } = req.params;
  const { upcomingVaccines } = req.body;

  try {
    const patient = await Patient.findOneAndUpdate({ birthCertificateId }, { upcomingVaccine: upcomingVaccines }, { new: true });
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }
    res.status(200).json({ message: 'Upcoming vaccines updated successfully' });
  } catch (error) {
    console.error('Error updating upcoming vaccines:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
