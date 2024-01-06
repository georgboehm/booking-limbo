const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const router = express.Router();

// Define a sample route
router.post("/send-email", cors(), (req, res) => {
  // Create a transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.BOOKING_REQUEST_SENDER_EMAIL,
      pass: process.env.BOOKING_REQUEST_SENDER_PASSWORD,
    },
  });
  const { name, phoneNumber, date, time, message } = req.body;

  // Email content
  const mailOptions = {
    from: process.env.BOOKING_REQUEST_SENDER_EMAIL,
    to: process.env.BOOKING_RECIPIENT_EMAIL,
    subject: "New Booking Request",
    text: `
        Name: ${name}
        Phone number: ${phoneNumber}
        Date: ${date}
        Time: ${time}
        Message: ${message}
      `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).json({ message: "Error sending email" });
    } else {
      res.json({ message: "Email sent successfully" });
    }
  });
});

module.exports = router;
