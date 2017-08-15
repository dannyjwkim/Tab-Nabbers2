/**
 * Created by esterlingaccime on 8/10/17.
 */

var express = require("express"),
    router = express.Router(),
    path = require("path"),
    key = require("../config/key");

var user = require("../models1/user");




router.get("*", function(req, res) {

    // var data = new user({ username: 'accimeesterlin' });
    //
    // data.save(function (err, small) {
    //
    //     if(err){
    //         console.log(err);
    //     }
    //     console.log("Data saved!!");
    // });



    res.sendFile(path.join(__dirname + "/../../front/public/index.html"));

});


// router.get('/profile', function (req, res) {
//
//     res.json("Ok");
// });




module.exports = router;