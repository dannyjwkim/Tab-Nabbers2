
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Utils = require("../helpers/utils");
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');

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
    signup: (req, res, next) => {
        const {
            email,
            name,
            password
        } = req.body;

        const sendgrid_email = {
            from: 'awesome@bar.com',
            to: `${email}, esterlinaccime@gmail.com`,
            subject: 'Welcome to Tab Nabbers',
            text: 'We are supper excited to have you on the Team. Welcome on board',
            html: `
            <h1>Congratulations on joining the community</h1>
            <p>We are a community of nabbers that love searching for tabs (jobs),
            We're super excited to have you on our team. Hope you enjoy our platform. Start by 
            exploring our favorite features. <p>
            `
        };

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        User.findOne({ email })
            .then((user) => {
                if (user) { res.status(409).json({ error: "Sorry, user already created!" }); }
                else {
                    const newUser = new User({ name, password: hash, email });

                    newUser.save((err) => {
                        if (err) {
                            res.json({ error: "Not able to create a user at this time" });
                        } else {
                            client.sendMail(sendgrid_email, (err, info) => {
                                if (err)
                                    res.json({ error: "Not able to send the email" });
                                else {
                                    res.json({ msg: "Email sent!" });
                                }
                            });
                        }
                    });
                }
            })
            .catch((err) => res.status(500).json({ error: "Internal error" }));
    },





    signin: (req, res, next) => {
        const {
            email,
            password
        } = req.body;

        User.findOne({ email })
            .then((user) => {
                if (bcrypt.compareSync(password, user.password)) {
                    res.cookie("token", "ffs").json({ msg: "User is now logged in" });
                } else {
                    res.status(409).json({ error: "Credentials don't match" });
                }
            })
            .catch((err) => res.status(500).json({ error: "Internal error" }));
    }

};