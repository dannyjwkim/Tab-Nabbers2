
module.exports = function (app, passport) {

    app.post('/signup',  passport.authenticate('local-signup', {}), (req, res) => {
        res.json("Authenticated!!");
    });


    app.post('/login', passport.authenticate('local-login', {}), (req, res) => {
        // console.log(req);
        console.log(req.user);
       res.json("User Signed in!!");

    });




    app.get('/auth/facebook', passport.authenticate('facebook', {scope:'email'}));

    app.get('/auth/facebook/callback', passport.authenticate('facebook', {
        successRedirect: '/profile',
        failureRedirect: '/'
    }));




    app.get('/auth/linkedin',
        passport.authenticate('linkedin'));

    app.get('/auth/linkedin/callback',
        passport.authenticate('linkedin', { failureRedirect: '/' }),
        function(req, res) {
            // Successful authentication, redirect home.
            res.redirect('/profile');
        });


    app.get('/auth/google',
        passport.authenticate('google', { scope: ['profile', 'email'] }));

    app.get('/auth/google/callback', passport.authenticate('google', { successRedirect : '/profile', failureRedirect: '/' }));



    app.get('/auth/twitter', passport.authenticate('twitter'));


    app.get('/auth/twitter/callback',
        passport.authenticate('twitter', { successRedirect: '/profile',
            failureRedirect: '/' }));


    function isLoggedIn(req, res, next) {
        if(req.isAuthenticated()){
            return next()
        } else{
            res.redirect("/");
        }
    }


};


