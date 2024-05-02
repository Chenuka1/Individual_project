// scheduler.js

const cron = require('node-cron');
const Patient = require('./models/patientModel'); // Import your Mongoose Patient model
const admin = require('firebase-admin');
const serviceAccount = require('./serviceaccount/notification.json');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Function to send a push notification
async function sendPushNotification(token, title, body) {
  try {
    await admin.messaging().send({
      token: token,
      notification: {
        title: title,
        body: body
      }
    });
    console.log('Notification sent successfully');
  } catch (error) {
    console.error('Error sending notification:', error);
  }
}

// Function to check for upcoming vaccination dates and send notifications
async function sendVaccinationNotifications() {
  try {
    // Get today's date
    const today = new Date();

    // Define the threshold for upcoming vaccination dates (e.g., within 1 day)
    const thresholdDate = new Date(today);
    thresholdDate.setDate(today.getDate() + 1);

    // Query the "patients" collection for patients whose vaccination dates are approaching
    const patients = await Patient.find({ vaccinationDate: { $lte: thresholdDate } });

    // Send personalized notifications to each patient
    patients.forEach(patient => {
      sendNotification(patient);
    });

    console.log('Vaccination notifications sent successfully.');
  } catch (error) {
    console.error('Error sending vaccination notifications:', error);
  }
}

// Function to send personalized notification to a patient
function sendNotification(patient) {
  // Construct personalized notification message
  const title = 'Upcoming Vaccination';
  const body = `Hi ${patient.fullName}, you have an upcoming vaccination for ${patient.vaccineName} on ${patient.vaccinationDate}`;

  // Send notification to patient (e.g., using Firebase Cloud Messaging)
  sendPushNotification(patient.token, title, body);
}

// Schedule the task to run once a day
cron.schedule('0 0 * * *', () => {
  console.log('Running scheduled task to send vaccination notifications...');
  sendVaccinationNotifications();
});
