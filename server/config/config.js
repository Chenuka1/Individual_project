require('dotenv').config();

module.exports = {
    jwtSecret: process.env.JWT_SECRET || 'fallback_secret_key_here'
};
