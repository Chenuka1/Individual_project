//services/TwilioService.js

const twilio = require('twilio');

// Twilio configuration
const accountSid = 'ACcfae53f75bd6a83d455a5d3d5707a3a8';
const authToken = '6834aba6239bad8a29894a6f521d7757';
const twilioPhoneNumber = '+12512378619';

const client = twilio(accountSid, authToken);

// Function to send SMS using Twilio
async function sendSMS(to, message) {
    try {
        await client.messages.create({
            body: message,
            from: twilioPhoneNumber,
            to: to
        });
        console.log('SMS sent successfully');
    } catch (error) {
        console.error('Error sending SMS:', error);
        throw error;
    }
}

module.exports = { sendSMS };
