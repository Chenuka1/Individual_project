// model/patientModel.js
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  
  username: { type: String, required: true },
  password:{type:String,required:true},
 





});

const Patient = mongoose.model('Patient', patientSchema); // Note the uppercase 'P' in 'Patient'

module.exports = Patient;
