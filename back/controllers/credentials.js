
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Utils = require("../helpers/utils");

require("dotenv").config();


const {
    sendingMail
} = Utils;



let setCookiesAndSendMail = (mail, res, user) => {
    let {
        email,
        _id,
        join_since
    } = user;

    const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: {
            _id,
            email,
            join_since
        }
    }, process.env.SECRET);

    res.cookie("token", token);

    if (mail !== null)
        sendingMail(mail, res);
    res.json({ msg: "Ok" });


};

module.exports = {
    signup: (req, res, next) => {
        const {
            email,
            name,
            password
        } = req.body;

        const sendgrid_email = {
            from: 'sadrack@bar.com',
            to: email,
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
                        if (err)
                            res.json({ error: "Not able to create a user at this time" });
                        setCookiesAndSendMail(sendgrid_email, res, user);
                    });
                }
            })
            .catch((err) => res.json({ error: "Internal error" }));
    },





    signin: (req, res, next) => {
        const {
            email,
            password
        } = req.body;

        User.findOne({ email })
            .then((user) => {
                if (bcrypt.compareSync(password, user.password))
                    setCookiesAndSendMail(null, res, user);
                res.status(409).json({ error: "Credentials don't match" });

            })
            .catch((err) => res.status(500).json({ error: "Internal error" }));
    }

};