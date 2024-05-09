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


// Define a sample vaccination schedule
const vaccinationSchedule = [
  { ageYears: 0, ageMonths: 2, vaccine: "DTaP", description: "Diphtheria", monthsAfterBirth: 2,Dose:1,status:"pending" },
  { ageYears: 0, ageMonths: 4, vaccine: "Rotavirus", description: "Rotavirus Vaccine", monthsAfterBirth: 4,Dose:1,status:"pending" },
  { ageYears: 0, ageMonths: 6, vaccine: "HepB", description: "Hepatitis B Vaccine", monthsAfterBirth: 6,Dose:1,status:"pending" },
  { ageYears: 1, ageMonths: 0, vaccine: "MMR", description: "Measles, Mumps, Rubella Vaccine", monthsAfterBirth: 12 ,Dose:1,status:"pending"},
  // Add more vaccines as needed
];

// Function to calculate upcoming vaccination date based on age in years and months
const calculateUpcomingVaccinationDate = (birthdate, vaccine) => {
  const birthDate = new Date(birthdate);
  const today = new Date();
  const ageInMonths = (today.getFullYear() - birthDate.getFullYear()) * 12 + (today.getMonth() - birthDate.getMonth());

  // Calculate the number of months after birth for the vaccine
  const monthsAfterBirth = vaccine.ageYears * 12 + vaccine.ageMonths;

  // Calculate the vaccination date
  const vaccinationDate = new Date(birthDate);
  vaccinationDate.setMonth(vaccinationDate.getMonth() + monthsAfterBirth);

  return vaccinationDate;
};

// Function to calculate upcoming vaccinations based on age in years and months
const calculateUpcomingVaccinations = (birthdate) => {
  // Find upcoming vaccinations based on age in months and years
  const upcomingVaccinations = vaccinationSchedule.map(vaccine => {
      return {
          ...vaccine,
          upcomingVaccinationDate: calculateUpcomingVaccinationDate(birthdate, vaccine)
      };
  });

  return upcomingVaccinations;
};

// POST route to update a patient's medical history and calculate upcoming vaccination schedule
router.put('/:birthCertificateId/medical-history', async (req, res) => {
  const { birthCertificateId } = req.params;
  const medicalHistoryData = req.body;
  try {
      // Calculate upcoming vaccination schedule based on birthdate
      const upcomingVaccinations = calculateUpcomingVaccinations(medicalHistoryData.birthdate);
      // Add upcoming vaccinations to medical history data
      medicalHistoryData.upcomingVaccine = upcomingVaccinations;

      // Update medical history with the new data
      const updatedPatient = await updateMedicalHistory(birthCertificateId, medicalHistoryData);
      res.json(updatedPatient);
  } catch (error) {
      console.error('Error updating medical history:', error);
      res.status(500).json({ error: 'Failed to update medical history' });
  }
});






const bcrypt = require('bcrypt');

router.post('/create', async (req, res) => {
  try {
    const { password, ...patientData } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Hashing the password with a salt round of 10

    // Set a default value for blood
    patientData.blood = 'Unknown'; // Replace 'Unknown' with the appropriate default value

    // Replace the plain text password with the hashed one
    const newPatient = new Patient({ ...patientData, password: hashedPassword });
    
    await newPatient.save();
    
    // Don't include the password in the response
    delete newPatient.password;

    res.status(201).json({ message: 'Patient created successfully', patient: newPatient });
  } catch (error) {
    console.error('Error creating patient:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});





router.get('/assign', async (req, res) => {
  try {
      const registeredHospital = req.user.registeredHospital; // Assuming user data is attached to the request after authentication
      const patients = await Patient.find({ registeredHospital });
      res.json(patients);
  } catch (error) {
      console.error('Error fetching patients:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
});

// Function to fetch medical history by birth certificate ID
const getMedicalHistory = async (birthCertificateId) => {
  try {
    // Find the patient by birth certificate ID and select all fields
    const patient = await Patient.findOne({ birthCertificateId: birthCertificateId });
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
