const axios = require("axios");
const User = require("../models/user");

module.exports = {

    github: (req, res, next) => {
        const endpoint = "https://github.com/login/oauth/authorize?";
        const params = "client_id=be6bdf039890ab8c1f6d&scope=notifications&redirect_uri=http://localhost:3000/github/authorize";
        res.json({ url: endpoint + params });
    },

    githubToken: (req, res, next) => {
        const {
            code
        } = req.body;

        const endpoint = "https://github.com/login/oauth/access_token?";
        const params = `code=${code}&client_secret=4db1f0ce2198d91ac45076117a8a572afafedf26&client_id=be6bdf039890ab8c1f6d&redirect_uri=http://localhost:3000/github/authorize`;

        axios({
            url: endpoint + params,
            method: "POST",
            headers: {
                Accept: "application/json"
            }
        })
            .then((response) => {
                User.update({ email: "accimeesterlin@yahoo.com" }, { $set: { githubToken: response.data.access_token } })
                    .then((user) => res.json({ msg: "Token has been saved" }))
                    .catch((err) => res.status(500).json({ error: "Internal error" }));
            })
            .catch((err) => res.status(409).json({ error: "Ok" }));

    },

    google: (req, res, next) => {
        const endpoint = "https://accounts.google.com/o/oauth2/v2/auth?";
        const params = "scope=https://www.googleapis.com/auth/calendar&client_id=331517669142-36per55su6oftkriuaipe3k9d7e2mj4d.apps.googleusercontent.com&redirect_uri=http://localhost:3000/googlecalendar/authorize&&access_type=offline&response_type=code";
        res.json({ url: endpoint + params });
    },

    googleCalendar: (req, res, next) => {
        const {
            code
        } = req.body;

        console.log("Body: ", req.body);

        const endpoint = "https://www.googleapis.com/oauth2/v4/token?";
        const params = `code=${code}&client_secret=vzVCbbkNfpgIvsf1GRAVL9Oe&client_id=331517669142-36per55su6oftkriuaipe3k9d7e2mj4d.apps.googleusercontent.com&redirect_uri=http://localhost:3000/googlecalendar/authorize&grant_type=authorization_code`;

        axios({
            url: endpoint + params,
            method: "POST"
        })
            .then((response) => {
                console.log("Response: ", response.data);
                User.update({ email: "accimeesterlin@yahoo.com" }, { $set: { googleToken: response.data.access_token } })
                    .then((user) => res.json({ msg: "Token has been saved" }))
                    .catch((err) => res.status(500).json({ error: "Internal error" }));
            })
            .catch((err) => {
                console.log("Error: ", err.response);
                res.status(409).json({ error: "Ok" });
            });

    },
};