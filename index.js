const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/api/form', (req,res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
            <h3>Contact Details</h3>
            <ul>
                <li>Name: ${req.body.name}</li>
                <li>Email: ${req.body.email}</li>
                <li>Phone Number: ${req.body.phone}</li>
            </ul>
            <h3>Message</h3>
            <p>${req.body.message}</p>
        `

        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure:true,
            auth: {
                type: 'OAuth2',
                user: process.env.USER_NAME,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: process.env.ACCESS_TOKEN            
            }
        })

        let emailOptions = {
            from: req.body.email,
            to: process.env.USER_NAME,
            subject: 'New Message From Portfolio',
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(emailOptions, (err, info) => {
            if(err) {
                return console.log(err);
            }

            console.log('Message sent: %s', info.message);
            console.log('Message URL: %s', nodemailer.getTestMessageUrl(info));
        })
    })
});

// Set static folder
app.use(express.static("client/build"));

// index.html for all page routes
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
});

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});