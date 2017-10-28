import {localSignUp} from '../middlewares/localSignup';


module.exports = function (app, passport) {


    app.post('/signup',  localSignUp, (req, res) => {
        const token = req.user['tokens'][0].token;
        const _id = req.user._id;
        res.header('x-auth', token).json({message: 'User created!', user_id: _id});
    });


    // app.post('/login', passport.authenticate('local-login', {}), (req, res) => {
    //     const token = jwt.sign({user: req.user}, 'ilovebootcruit');
    //     res.header('x-auth', token).send();
    // });

    app.get('/auth/facebook', passport.authenticate('facebook', {scope:'email'}));

    app.get('/auth/facebook/callback', passport.authenticate('facebook', {
        successRedirect: '/profile',
        failureRedirect: '/'
    }));

    app.get('/auth/linkedin',
        passport.authenticate('linkedin'));

    app.get('/auth/linkedin/callback', passport.authenticate('linkedin', {
        failureRedirect: '/'
    }), (req, res) => {
        res.redirect('/profile');
    });


    app.get('/auth/google',  passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    app.get('/auth/google/callback', passport.authenticate('google', {
        successRedirect : '/profile',
        failureRedirect: '/'
    }));





    app.get('/auth/twitter', passport.authenticate('twitter'));


    app.get('/auth/twitter/callback',
        passport.authenticate('twitter', { successRedirect: '/profile',
            failureRedirect: '/' }));


    const isLoggedIn = (req, res, next) => {
        if(req.isAuthenticated()){
            return next()
        } else{
            res.redirect("/");
        }
    }


};


