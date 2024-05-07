const cron = require('node-cron');
const Patient = require('./models/patientModel'); // Import your Patient model
const twilioClient = require('./services/TwilioService'); // Import your Twilio client

function scheduleNotifications() {
  cron.schedule('* * * * *', async () => {
    try {
        const reminderDate = new Date();
        reminderDate.setDate(reminderDate.getDate() + 1);
        
        const upcomingPatients = await Patient.find({
           // upcomingvaccinedate: reminderDate, // Find patients with the upcomingvaccinedate matching the reminder date
            upcomingvaccinestatus: 'pending' // Find patients with pending vaccines
        });
      console.log(upcomingPatients);

      upcomingPatients.forEach(patient => {
        
        twilioClient.sendSMS(patient.contactNumber,`Hi ${patient.name}, your vaccination date is approaching. Please remember to attend.`);
      });
    } catch (error) {
      console.error('Error scheduling notifications:', error);
    }
  });
}

module.exports = scheduleNotifications;
