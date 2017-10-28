


module.exports = (passport, User, key) => {
    const LinkedInStrategy = require('passport-linkedin').Strategy;

    passport.use(new LinkedInStrategy({
            consumerKey: key.linkedin.client_id,
            consumerSecret: key.linkedin.client_secret,
            callbackURL: "http://localhost:8080/auth/linkedin/callback"
        },
        function(token, tokenSecret, profile, done) {

            // asynchronous
            process.nextTick(function() {

                // find the user in the database based on their facebook id
                User.findOne({ 'linkedin.id' : profile.id }, function(err, user) {

                    // if there is an error, stop everything and return that
                    // ie an error connecting to the database
                    if (err)
                        return done(err);

                    // if the user is found, then log them in
                    if (user) {
                        return done(null, user); // user found, return that user
                    } else {
                        // if there is no user found with that facebook id, create them
                        let newUser            = new User();

                        // set all of the facebook information in our user model
                        newUser.linkedin.id    = profile.id; // set the users facebook id
                        newUser.linkedin.token = token; // we will save the token that facebook provides to the user
                        newUser.linkedin.name  = profile.displayName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
                        // newUser.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first

                        // save our user to the database
                        newUser.save(function(err) {
                            if (err)
                                throw err;

                            // if successful, return the new user
                            return done(null, newUser);
                        });
                    }

                });
            });

            console.log(profile, tokenSecret, token);
        }
    ));

};
