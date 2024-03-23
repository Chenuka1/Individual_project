// backend: models/midwifeModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
    contact: String,
    registeredHospital: String,
});

const User= mongoose.model('user', userSchema);

module.exports = User;
