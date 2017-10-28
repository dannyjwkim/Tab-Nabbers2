




/**
 * Authenticate the user password with bcrypt
 * store the user email and password into our Database
 * Send an object with property error in case of errors
 * @param req
 * @pram res
 * @param next
 * @method localSignup
 */

const User = require('../models/user');

const localSignUp = (req, res, next) => {

    const {email, password} = req.body;

    User.findOne({email})
        .then((user) => {
            if(user){
                return Promise.reject({error:'Email already registered, try to login or reset your password'});
            } else{
                let newUser = new User({ email });
                newUser.password = newUser.generateHash(password);
                newUser.save((err) => {
                    if(err){
                        res.status(400).json({error:'Email or password not valid'});
                    } else{
                        newUser.generateAuthToken();
                        req.user = newUser;
                        next();
                    }
                })
            }
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};





module.exports = localSignUp;

