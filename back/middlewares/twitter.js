/**
 * Twitter Passport Middleware to sign useer
 * with their twitter account
 * @param passport
 * @param User
 * @param key
 */
module.exports = (passport, User, key) => {
    const TwitterStrategy = require('passport-twitter').Strategy;
    passport.use(new TwitterStrategy({
            consumerKey: key.twitter.consurmer_key,
            consumerSecret: key.twitter.consumer_secret,
            callbackURL: "http://localhost:8080/auth/twitter/callback",
            passReqToCallback : true
        },
        function(req, token, tokenSecret, profile, done) {

            process.nextTick(function() {

                User.findOne({ 'twitter.id' : profile.id }, function(err, user) {
                    if (err)
                        return done(err);

                    if (user) {
                        return done(null, user);
                    } else {
                        let newUser                 = new User();
                        newUser.twitter.id          = profile.id;
                        newUser.twitter.token       = token;
                        newUser.twitter.username    = profile.username;
                        newUser.twitter.displayName = profile.displayName;
                        newUser.save(function(err) {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        });
                    }
                });

            });

        }
    ));
};