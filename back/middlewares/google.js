


module.exports = (passport, User, key) => {
    const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
    passport.use(new GoogleStrategy({
            clientID: key.gooogle.client_Id,
            clientSecret: key.gooogle.client_secret,
            callbackURL: "http://localhost:8080/auth/google/callback",

        },
        function(token, refreshToken, profile, done) {

            // User.findOne won't fire until we have all our data back from Google
            process.nextTick(function() {

                // try to find the user based on their google id
                User.findOne({ 'google.token' : token }, function(err, user) {
                    if (err)
                        return done(err);

                    if (user) {
                        // if a user is found, log them in
                        return done(null, user);

                    } else {
                        // if the user isnt in our database, create a new user
                        let newUser          = new User();

                        // set all of the relevant information
                        // newUser.google.id    = profile.id;
                        newUser.google.token = token;
                        newUser.google.name  = profile.displayName;
                        // newUser.google.email = profile.emails[0].value; // pull the first email

                        // save the user
                        newUser.save(function(err) {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        });
                    }
                });

            });

            console.log(profile);
        }));

};