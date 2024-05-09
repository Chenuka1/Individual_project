//model/patientModel
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    birthCertificateId: { type: String, required: true },
    fullName: { type: String, required: true },
    username: { type: String, required: true },
    blood: { type: String, required: true },
    password: { type: String, required: true },
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
    vaccinename: { type: String },
    vaccinedate: { type: Date },
    ageinMonths: { type: Number },
    upcomingVaccine: [{ 
        ageYears: { type: Number, required: true },
        ageMonths: { type: Number, required: true },
        vaccine: { type: String, required: true },
        description: { type: String, required: true },
        monthsAfterBirth: { type: Number, required: true },
        upcomingVaccinationDate: { type: Date, required: true },
        Dose:{type:Number},
        status:{type:String}
    }],
    upcomingvaccinedate: { type: Date },
    upcomingvaccinestatus: { type: String, enum: ['completed', 'pending'] },
    upcomingVaccinationDate: { type: Date } // New field for upcoming vaccination date
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
