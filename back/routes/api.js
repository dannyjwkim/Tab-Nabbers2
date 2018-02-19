const express = require("express");
const router = express.Router();

const Credentials = require("../controllers/credentials");
const API = require("../controllers/thirdpartyapi");

const {
    signin,
    signup
} = Credentials;

const {
    eventbrite:{
        search
    }
} = API;


router.post("/signup", signup);


router.post("/signin", signin);


router.get("/eventbrite/search", search);




module.exports = router;