require('dotenv').load();

const axios = require('axios');
const meetupApi = `https://api.meetup.com/find/events?text=JavaScript&key=${process.env.MEET_UP_KEY}`;
const User = require('../models/user');
const Event = require('../models/events');


module.exports = function (app) {
    app.get('/meetup/api', (req, res) => {
        axios.get(meetupApi)
            .then((meetupData) => {
                res.json({ data: meetupData.data });
            })
            .catch((err) => {
                res.status(500).json({ error: "Error occur" });
            })

    });


    app.get('/group/:urlname', (req, res) => {
        const url = req.params.urlname;
        axios({
            url: 'https://api.meetup.com/' + url,
            method: 'GET'
        })
            .then((response) => {
                res.json(response.data);
            })
            .catch((err) => {
                res.status(500).json({ error: "Error occur" });
            });
    });


    app.get("/profile/info", (req, res) => {
        const email = req.header('x-email');
        User.findOne({ email })
            .select('-password -tokens')
            .then((user) => {
                res.status(200).json(user);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    });


    // ================================================================================
    // ======================= Handling Post Request ==================================
    // ================================================================================
    app.post('/edit_profile', (req, res) => {
        const email = req.header('x-email');

        User.findOne({ email })
            .then((current_user) => {
                for (let key in req.body) {
                    if (key === 'zipcode' || key === 'city' || key === 'street_address')
                        current_user['address'] = req.body;
                    current_user[key] = req.body[key];
                }

                current_user.save((err) => {
                    if (err)
                        res.status(404).json({ err });
                    res.status(200).json({ msg: 'Ok' });
                });
            })
            .catch((err) => {
                res.status(500).json({ err });
            });
    });
};