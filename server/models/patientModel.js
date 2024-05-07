// model/patientModel.js
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  birthCertificateId: { type: String, required: true },
  fullName: { type: String, required: true },
  username: { type: String, required: true },
  blood:{type:String,required:true},
  password:{type:String,required:true},
  birthdate: { type: Date },
  gender: { type: String, enum: ['male', 'female'] },
  parentsName: { type: String },
  contactNumber: { type: String, minlength: 10, maxlength: 15 },
  registeredHospital: { type: String },
  pastDiseases: { type: String },
  allergies: { type: String },
  appointmentDate: { type: Date },
  medications: { type: String },
  surgery: { type: String },
  vaccinename: {type:String},
  vaccinedate:{type:Date},
  ageinMonths:{type:Number},
  upcomingVaccine:{type:String},
  upcomingvaccinedate:{type:Date},
  upcomingvaccinestatus:{type:String,enum:['completed','pending']}





});

const Patient = mongoose.model('Patient', patientSchema); // Note the uppercase 'P' in 'Patient'

module.exports = Patient;
