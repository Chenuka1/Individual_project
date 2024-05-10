const cron = require('node-cron');
const sendEmail = require('./emailService'); // Import the sendEmail function
const Patient = require('./models/patientModel');

function scheduleCronjob() {
  cron.schedule('0 8 * * *', async () => { // Change the schedule expression to run every minute
    try {
      // Get patients with upcoming vaccination dates
      const patients = await Patient.find({});
  
      patients.forEach(patient => {
        patient.upcomingVaccine.forEach(vaccine => {
          // Calculate the date seven days before the upcomingVaccinationDate
          const sevenDaysBefore = new Date(vaccine.upcomingVaccinationDate);
          sevenDaysBefore.setDate(sevenDaysBefore.getDate() - 7);
  
          // Check if the current date is seven days before the upcomingVaccinationDate
          // Also, verify if the vaccine status is pending
          if (new Date() >= sevenDaysBefore && vaccine.status === 'pending') {
            // Customize email content for each patient
            const subject = 'Upcoming Vaccination Reminder';
            const text = `Dear ${patient.fullName},\n\nThis is a reminder that your upcoming vaccination for ${vaccine.vaccine} is scheduled on ${vaccine.upcomingVaccinationDate}.\n\nPlease make sure to attend the appointment.\n\nBest regards,\nYour Healthcare Team`;
            
            // Send email
            sendEmail(patient.email, subject, text);
          }
        });
      });
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  });
}

module.exports = scheduleCronjob;
