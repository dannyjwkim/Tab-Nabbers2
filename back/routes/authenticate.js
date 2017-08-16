
const path = require("path");


module.exports = function (app, passport) {

    app.get("/", function(req, res) {

        res.sendFile(path.join(__dirname + "/../../front/public/index.html"));

    });

    app.get("/profile", function(req, res) {

        res.sendFile(path.join(__dirname + "/../../front/public/index.html"));

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


