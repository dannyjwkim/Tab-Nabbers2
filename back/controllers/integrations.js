const axios = require("axios");
const User = require("../models/user");

module.exports = {

    serviceRedirect: (req, res, next) => {
        const {
            service
        } = req.body;

        switch (service) {
            case "github":
                res.json({ url: process.env.GITHUB_AUTHORIZE, service });
                break;

            case "google":
                res.json({ url: process.env.GOOGLE_AUTHORIZE, service });
                break;

            case "twitter":
                res.redirect({ url: process.env.TWITTER_AUTHORIZE, service });
                break;

            case "eventbrite":
                res.json({ url: process.env.EVENTBRITE_AUTHORIZE, service });
                break;
            default:
                res.status409().json({ error: "Please specify a service" });
        }
    },


    serviceToken: (req, res, next) => {
        const {
            code,
            service
        } = req.body;

        const sendRequest = (url) => {
            axios({
                url,
                method: "POST",
                headers: {
                    Accept: "application/json"
                }
            })
                .then((response) => {
                    User.update({ email: req.email }, { $set: { [service]: response.data } })
                        .then((user) => res.json({ [service]: "saved" }))
                        .catch((err) => res.status(500).json({ error: "Internal error" }));
                })
                .catch((err) => res.status(409).json({ error: "Sorry, it didn't work" }));
        };

        switch (service) {
            case "google":
                sendRequest(process.env.GOOGLE_TOKEN + "&code=" + code);
                break;

            case "github":
                sendRequest(process.env.GITHUB_TOKEN + "&code=" + code);
                break;

            default:
                res.status(409).json({ error: "No service provided" });
        }
    },



    listIntegrations: (req, res, next) => {
        User.findOne({email: req.email})
            .then((user) => {
                const google = user.google.access_token ? true : false;
                const github = user.github.access_token ? true : false;
                const eventbrite = user.eventbrite.access_token ? true : false;
                const twitter = user.twitter.access_token ? true : false;

                res.json({
                    google,
                    twitter,
                    eventbrite,
                    github
                });
            })
            .catch(() => res.status(401).json({error: "Internal Error"}));
    }


};