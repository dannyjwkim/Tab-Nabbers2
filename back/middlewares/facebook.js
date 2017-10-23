/**
 * Facebook Middleware to sign up user
 * with their Facebook Account
 * @param passport
 * @param User
 * @param key
 */

module.exports = (passport, User, key) => {
    const FacebookStrategy = require('passport-facebook').Strategy;
    passport.use(new FacebookStrategy({
            clientID: key.facebook.client_id,
            clientSecret: key.facebook.client_secret,
            callbackURL: "http://localhost:8080/auth/facebook/callback"
        },
        function(token, refreshToken, profile, done) {
            console.log(profile);
            process.nextTick(function() {
                User.findOne({ 'facebook.id' : profile.id }, function(err, user) {
                    if (err)
                        return done(err);
                    if (user) {
                        return done(null, user, {message: 'User already exist'});
                    } else {
                        let newUser = new User();
                        newUser.facebook.id    = profile.id;
                        newUser.facebook.token = token;
                        newUser.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName;
                        newUser.save(function(err) {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        });
                    }
                });
            });
        }));
};