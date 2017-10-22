



/**
 * Authenticate the user with Passport Local Strategy
 * @param passport
 * @param User
 */
module.exports = (passport, User) => {
    const LocalStrategy = require("passport-local").Strategy;

    passport.use('local-signup', new LocalStrategy({
        usernameField:'email',
        passwordField:'password',
        passReqToCallback:true
    }, function (req, email, password, done) {

       User.findOne({'email':email}, (err, user) => {
           if(err)
               return done(err);
           if(user)
               return done(null, false, {message:'Email already exist!'});
           let newUser = new User({ email });
               newUser.password = newUser.generateHash(password);
               newUser.save((err) => {
                   if(err)
                       return done(err);
                   return done(null, newUser);
               })
       })

   }));
 };

