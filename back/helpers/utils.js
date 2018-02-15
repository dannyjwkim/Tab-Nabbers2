
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
const jwt = require("jsonwebtoken");

require("dotenv").config();


// username + password 
const options = {
    auth: {
        api_user: process.env.SENDGRID_USERNAME,
        api_key: process.env.SENDGRID_PASSWORD
    }
};

const client = nodemailer.createTransport(sgTransport(options));


module.exports = {

    // Sending Emails
    sendingMail: (obj, res) => {
        client.sendMail(obj, (err, info) => {
            if (err)
                res.status(500).json({ error: "Email were not able to be delivered" });
            res.json({ msg: "User has been created, and email has been sent!" });
        });
    }
};