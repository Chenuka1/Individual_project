const cron = require('node-cron');
const Patient = require('./models/patientModel'); // Import your Patient model
const admin = require('firebase-admin');
const serviceAccount = require('./serviceaccount/notification.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // Other configuration options if needed
});
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

      upcomingPatients.forEach(async patient => {
        // Construct the FCM payload
        const message = {
          token: patient.fcmToken, // FCM token of the patient
          notification: {
            title: 'Vaccination Reminder',
            body: `Hi ${patient.name}, your vaccination date is approaching. Please remember to attend.`,
          },
        };

        // Send the FCM message
        try {
          const response = await admin.messaging().send(message);
          console.log('Successfully sent message:', response);
        } catch (error) {
          console.error('Error sending FCM message:', error);
        }
      });
    } catch (error) {
      console.error('Error scheduling notifications:', error);
    }
  });
}

module.exports = scheduleNotifications;
