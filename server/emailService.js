
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'chenukakuruppu@gmail.com',
    pass: 'bsmteefizjztqoco'
  }
});

function sendEmail(patientEmail, subject, text) {
  const mailOptions = {
    from: 'chenukakuruppu@gmail.com',
    to: patientEmail,
    subject: subject,
    text: text
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

module.exports = sendEmail;
