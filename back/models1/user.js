/**
 * Created by esterlingaccime on 8/14/17.
 */


const bcrypt = require("bcrypt"),
    mongoose = require("mongoose");

const schema = new mongoose.Schema({

    local            : {
        email        : {
            type:String,
            unique:true
        },
        password     : String
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },

    linkedin         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }
});

schema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
schema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};


const User = mongoose.model('User', schema);

module.exports = User;