// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    identity:{
        type:String,
        required:true
    },
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    hospital: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
