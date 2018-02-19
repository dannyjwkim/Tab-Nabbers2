const axios = require("axios");


module.exports = {
    eventbrite:{
        search: (req, res, next) => {

            const value = req.query.name;

            axios({
                url:`https://www.eventbriteapi.com/v3/events/search?q=${value}&categories=102`,
                headers:{
                    "Authorization": `Bearer ${process.env.EVENTBRITE_KEY}`
                }
            })
            
            .then((response) => {
                res.json(response.data);
            })
            .catch((err) => {
                res.status(409).json({error: err.response});
            });
        }
    }
};