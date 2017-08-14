/**
 * Created by esterlingaccime on 8/10/17.
 */

var express = require("express"),
    router = express.Router(),
    path = require("path"),
    key = require("../config/key");


var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const LinkedInStrategy = require('passport-linkedin').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.


// used to serialize the user for the session
passport.serializeUser(function(user, done) {
    done(null, user);
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
    // User.findById(id, function(err, user) {
    //     done(err, user);
    // });
});

passport.use(new GoogleStrategy({
        clientID: key.gooogle.client_Id,
        clientSecret: key.gooogle.client_secret,
        callbackURL: "http://localhost:8080/authenticate/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        // User.findOrCreate({ googleId: profile.id }, function (err, user) {
        //     return done(err, user);
        // });

        var user = {
            firstname:'Estelring'
        };

        done(null, user);

        console.log(profile, accessToken, refreshToken);
    }
));
// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.

router.get('/auth/google/callback', passport.authenticate('google', { successRedirect : '/profile', failureRedirect: '/' }));








passport.use(new TwitterStrategy({
        consumerKey: key.twitter.consurmer_key,
        consumerSecret: key.twitter.consumer_secret,
        callbackURL: "http://localhost:8080/authenticate/auth/twitter/callback"
    },
    function(token, tokenSecret, profile, done) {

        // User.findOrCreate(..., function(err, user) {
        //     if (err) { return done(err); }
        //     done(null, user);
        // });

        console.log(token, tokenSecret, profile);
    }
));


router.get('/auth/twitter', passport.authenticate('twitter'));

// Twitter will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
router.get('/auth/twitter/callback',
    passport.authenticate('twitter', { successRedirect: '/profile',
        failureRedirect: '/' }));



passport.use(new LinkedInStrategy({
        consumerKey: key.linkedin.client_id,
        consumerSecret: key.linkedin.client_secret,
        callbackURL: "http://localhost:8080/authenticate/auth/linkedin/callback"
    },
    function(token, tokenSecret, profile, done) {
        // User.findOrCreate({ linkedinId: profile.id }, function (err, user) {
        //     return done(err, user);
        // });

        console.log(profile, tokenSecret, token);
    }
));

router.get('/auth/linkedin',
    passport.authenticate('linkedin'));

router.get('/auth/linkedin/callback',
    passport.authenticate('linkedin', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });









passport.use(new FacebookStrategy({
        clientID: key.facebook.client_id,
        clientSecret: key.facebook.client_secret,
        callbackURL: "http://localhost:8080/authenticate/auth/facebook/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        // User.findOrCreate(..., function(err, user) {
        //     if (err) { return done(err); }
        //     done(null, user);
        // });

        var user = {
            lastname:"Accime",
            firstname:"Esterling"
        };

        done;
        console.log(profile, accessToken, refreshToken);
    }
));




// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/callback
router.get('/auth/facebook', passport.authenticate('facebook'));

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
router.get('/auth/facebook/callback',
    passport.authenticate('facebook', {scope:['read_stream', 'publish_actions']}, { successRedirect: '/',
        failureRedirect: '/login' }));

module.exports = router;