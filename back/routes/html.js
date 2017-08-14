/**
 * Created by esterlingaccime on 8/10/17.
 */

var express = require("express"),
    router = express.Router(),
    path = require("path"),
    key = require("../config/key");




router.get("*", function(req, res) {

    res.sendFile(path.join(__dirname + "/../../front/public/index.html"));


});




module.exports = router;