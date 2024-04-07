// model/patientModel.js
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  birthCertificateId: { type: String, required: true },
  fullName: { type: String, required: true },
  birthdate: { type: Date },
  gender: { type: String, enum: ['male', 'female'] },
  parentsName: { type: String },
  contactNumber: { type: String, minlength: 10, maxlength: 15 },
  registeredHospital: { type: String },
  pastDiseases: { type: String },
  allergies: { type: String },
  appointmentDate: { type: Date },
  medications: { type: String }
});

const Patient = mongoose.model('Patient', patientSchema); // Note the uppercase 'P' in 'Patient'

module.exports = Patient;
