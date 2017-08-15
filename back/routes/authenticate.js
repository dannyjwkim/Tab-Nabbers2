
const express = require("express");

const router = express.Router();

const path = require('path');

const passport = require("passport");



router.get('/auth/facebook', passport.authenticate('facebook'));


router.get('/auth/facebook/callback',
        passport.authenticate('facebook', {scope:['read_stream', 'publish_actions']}, { successRedirect: '/',
            failureRedirect: '/login' }));



router.get('/auth/linkedin',
        passport.authenticate('linkedin'));

router.get('/auth/linkedin/callback',
        passport.authenticate('linkedin', { failureRedirect: '/login' }),
        function(req, res) {
            // Successful authentication, redirect home.
            res.redirect('/profile');
        });


router.get('/auth/google',
        passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback', passport.authenticate('google', { successRedirect : '/profile', failureRedirect: '/' }));



router.get('/auth/twitter', passport.authenticate('twitter'));


router.get('/auth/twitter/callback',
        passport.authenticate('twitter', { successRedirect: '/profile',
            failureRedirect: '/' }));




module.exports = router;


