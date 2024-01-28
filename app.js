const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // or any port you prefer

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve your static files (HTML, CSS, JavaScript)
app.use(express.static('public'));

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Create a transporter using your email service (e.g., Gmail)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com', // your email
            pass: 'your-email-password'  // your email password or an app-specific password
        }
    });

    // Set up email data
    const mailOptions = {
        from: email,
        to: 'your-email@example.com', // recipient's email
        subject: `New message from ${name}`,
        text: message
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
