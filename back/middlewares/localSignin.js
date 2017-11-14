const jwt = require('jsonwebtoken');


/**
 * Sign in user with bcrypt decoded
 * Check if user exist or not
 * Return message in case password is invalid, or no user found
 * @param req
 * @param res
 * @param next
 * @method localSignIn
 *
 */

const localSignIn = (req, res, next) => {
    const User = require('../models/user');
    const {email, password} = req.body;
    User.findOne({'email': email})
        .then((user) => {
            if (!user) res.status(401).json({error: "Email doesn't exist, try again"});
            if (!user.validPassword(password)) res.status(401).json({error: "Password doesn't match"});
            else {
                const token = jwt.sign({
                    id: user.id,
                    email: user.email
                }, 'ilovebootcruit');

                req.token = token;

                next();
            }
        })
        .catch(() => res.status(401).json({error: 'Server error'}));
};


module.exports = localSignIn;





