/**
 * Sign in user with Passport Local Strategy
 * @param passport
 * @param User
 */
module.exports = (passport, User) => {
    const LocalStrategy = require("passport-local").Strategy;
    passport.use('local-login', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
    }, function (req, email, password, done) {
        User.findOne({ 'email' :  email }, function (err, user) {
            if(err)
                return done(err);
            if(!user)
                return done(null, false, 'Sorry bad, today is not your day, try again');
            if (!user.validPassword(password))
                return done(null, false, 'Password does not match');
            return done(null, user);

        });
    }));
};