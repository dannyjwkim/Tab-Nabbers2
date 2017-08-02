/**
 * Created by esterlingaccime on 8/2/17.
 */
var express = require("express"),
    router = express.Router(),
    db = require("../models");


var passport = require("passport"),
    FacebookStartegy = require("passport-facebook");

/* PASSPORT FACEBOOK STRATEGY CONFIGURATION */
var FACEBOOK_APP_ID = '457006511350135';
var FACEBOOK_APP_SECRET = '32f68288251c5922b299971461ca4eb9';

var fbOptions = {
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:8080/auth/facebook/callback"
};

var fbCallback = function(accessToken, refreshToken, profile, cb) {

    db.user.findOrCreate({ facebookId: profile.id }, function (err, user) {
        return cb(err, user);
    });

    console.log(accessToken, refreshToken, profile, cb);
};

passport.use(new FacebookStartegy(fbOptions, fbCallback));


router.get("/auth/facebook", passport.authenticate('facebook'));

router.get("/auth/facebook/callback", passport.authenticate('facebook', { failureRedirect: '/login' }), function (req, res) {

    res.redirect("/")

});

module.exports = router;