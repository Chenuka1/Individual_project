// route/login.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); // Import bcrypt for password hashing
const Patient = require('../models/patientModel'); // Import the patient model

// Function to generate a JWT token
const generateToken = (patient) => {
  const payload = {
    userId: patient._id,
    username: patient.username,
    // Add any additional data you want to include in the token payload
  };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the patient by username
    const patient = await Patient.findOne({ username }).exec();

    // If patient not found or password doesn't match, return error
    if (!patient || !(await bcrypt.compare(password, patient.password))) {
      return res.status(401).json({ success: false, message: 'Invalid username or password' });
    }

    // Generate token and send it back
    const token = generateToken(patient);
    res.status(200).json({ success: true, token });
    console.log(token);
  //   await AsyncStorage.setItem('token', token);
  //  const storedToken = await AsyncStorage.getItem('token');
  //   console.log('Token set in AsyncStorage:', storedToken);

  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

router.get('/login', async (req, res) => {

  console.log("request received sucessfully");

  res.status(200).json({ success: true, message:"sucess" });

  
});

module.exports = router;
