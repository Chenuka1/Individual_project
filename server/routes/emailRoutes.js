// backend/routes/emailRoutes.js

const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/send-email', async (req, res) => {
    const { recipient, subject, body } = req.body;

    try {
        // Create a Nodemailer transporter
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'chenukakuruppu@gmail.com', // your email
                pass: 'bsmteefizjztqoco' // your password
            }
        });

        // Send mail with defined transport object
        let info = await transporter.sendMail({
            from: 'chenukakuruppu@gmail.com', // sender address
            to: recipient, // list of recipients
            subject: subject, // Subject line
            text: body, // plain text body
            // html: "<b>Hello world?</b>", // html body
        });

        console.log("Message sent: %s", info.messageId);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

module.exports = router;
