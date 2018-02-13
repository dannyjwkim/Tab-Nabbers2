const express = require("express");
const router = express.Router();

const Credentials = require("../controllers/credentials");

const {
    signin,
    signup
} = Credentials;


router.post("/signup", signup);


router.post("/signin", signin);


module.exports = router;