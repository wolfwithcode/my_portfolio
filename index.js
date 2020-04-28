const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

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
                user: 'nguyenax73@gmail.com',
                clientId: '974595913644-slfeshve8p5j4gih693clejul9adcrso.apps.googleusercontent.com',
                clientSecret: 'jN17kSYoNNflgFS7cbufq4Td',
                refreshToken: '1//04mZfbD4wpgHqCgYIARAAGAQSNwF-L9IrxeKNHr2ctKO9Dt3RnMyc3AMfVQgU9TCMB-LKfvqPrqlZHtOmsKCxb2hJ4O2RnGGTTVU',
                accessToken: 'ya29.a0Ae4lvC2f-ZnJPSs7AerOIZZSAO_-xFPt_ECSMXVWG9CAD3agcpzWP9rzJU_JV-bE0jds-9sZr_gJkxN94lbKGMDqEDeuXlI3vteejGnK_ZZPYziNqjvjyunZy_A4jowMp17Xr98wPV9oNG4pJLoNFBWl8s8R8dR4l6E'           
            }
        })

        let emailOptions = {
            from: req.body.email,
            to: 'nguyenax73@gmail.com',
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

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});