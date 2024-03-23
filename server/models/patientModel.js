const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  birthCertificateId: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  birthdate: { type: Date }, // Change to Date type for birthdate
  gender: { type: String, enum: ['male', 'female'] }, // Example using enum for gender
  parentsName: { type: String },
  contactNumber: { type: String, minlength: 10, maxlength: 15 }, // Example length validation for phone number
  registeredHospital: { type: String },
});

const Patient= mongoose.model('patient', patientSchema);

module.exports = Patient;
