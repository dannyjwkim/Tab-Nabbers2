const User = require("./models/user"),
      key = require("./config/key");

import {
    facebook,
    google,
    twitter,
    localSignup,
    localSignin,
    linkedin
} from './passportAuthentication/index';



module.exports = (passport) => {
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    localSignup(passport, User);
    localSignin(passport, User);
    facebook(passport, User, key);
    google(passport, User, key);
    twitter(passport, User, key);
    linkedin(passport, User, key);
};