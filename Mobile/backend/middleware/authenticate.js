// middleware/authenticate.js

const jwt = require('jsonwebtoken');
const Patient = require('../models/patientModel');

const authenticateUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const patient = await Patient.findById(decoded.userId);

    if (!patient) {
      return res.status(401).json({ message: 'Invalid token. User not found.' });
    }

    req.user = patient; // Attach the patient object to the request
    next();
  } catch (error) {
    console.error('Error during authentication:', error);
    res.status(401).json({ message: 'Invalid token.' });
  }
};

module.exports = { authenticateUser };
