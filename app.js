import express from 'express';
import { createTransport } from 'nodemailer';
import path from 'path';
import cors from "cors";
import dotenv from "dotenv"

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/public")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);


app.post('/', (req, res) => {
    const { name, email, message } = req.body;
    // console.log(name);
    // console.log(email);
    // console.log(message);

    // Create a transporter using your email service (e.g., Gmail)
    const transporter = createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER, // your email
            pass: process.env.PASS  // your email password or an app-specific password
        }
    });

    // Set up email data
    const mailOptions = {
        from: email,
        to: process.env.TO, // recipient's email
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




app.listen(port, "0.0.0.0", () => {
  console.log(`server is listening at :${port}`);
});

