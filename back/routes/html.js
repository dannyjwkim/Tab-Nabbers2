/**
 * Created by esterlingaccime on 8/10/17.
 */

var db = require("../models"),
    bcrypt = require("bcrypt"),
    jwt = require("jsonwebtoken"),
    express = require("express"),
    router = express.Router(),
    secret = require("../config/secrets"),
    path = require("path"),
    formidable = require('formidable'),
    fs = require('fs-extra'),
    cloudinary = require('cloudinary'),
    axios = require("axios");



router.get("*", function(req, res) {

    res.sendFile(path.join(__dirname + "/../../front/public/index.html"));

});


module.exports = router;