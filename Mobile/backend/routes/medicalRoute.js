const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Patient = require('../models/patientModel');

const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }
  
    jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Unauthorized: Invalid token' });
      }
  
      req.user = decoded; // Corrected from req.userId to req.user
      next();
    });
};

// Example backend route to fetch medical details
router.get('/medical-details', authenticateToken, async (req, res) => {
    try {
        // Extract patient ID from authenticated request
        const patientId = req.user.userId;
    
        // Fetch medical details of the patient from the database
        const patient = await Patient.findById(patientId).select('-password').exec();
    
        if (!patient) {
            return res.status(404).json({ success: false, message: 'Patient not found' });
        }
    
        // Return the medical details
        res.status(200).json({ success: true, patient });
    } catch (error) {
        console.error('Error fetching medical details:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

module.exports = router;
