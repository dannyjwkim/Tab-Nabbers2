/**
 * Created by esterlingaccime on 8/14/17.
 * Edited by Juliafin and Reynnan on 8/26/17
 */

const bcrypt = require("bcryptjs");
const _ = require('lodash');
const mongoose = require("mongoose");

const emailValid = [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email.'];
const phonenumberValid = [/(?=^\d{10}$)|(?=^\d{3}-\d{3}-\d{4}$)|(?=^\(\d{3}\)\d{3}-\d{4}$)/, 'Please enter a valid phone number in the format 1234567890, 123-456-7890, or (123)456-7890'];
const zipcodeValid = [/^\d{5}(?:[-\s]\d{4})?$/, 'The zipcode must either be in the format XXXXX or XXXXX-XXXX.'];


const addressSchema = new mongoose.Schema({
    street_address: {
        type: String,
        trim: true
    },
    apartment_number: mongoose.Schema.Types.Mixed,
    city: {
        type: String,
        trim: true,
        default: ""

    },
    state: {
        type: String,
        default: ""

    },
    zipcode: {
        type: String,
        match: zipcodeValid,

    },
    _id: false
});

const skillSchema = new mongoose.Schema({
  
    skillName: {
        type: String
        // required: true
    },
    category: {
        type: String
        // match: [/^Library|Framework|Language$/],
        // required: true
    },
    active: {
        type: Boolean
        // required: true
    }
  

});


const userSchema = new mongoose.Schema({

    username:{
        type:String
    },

    firstName: {
        type: String,
        trim: true,
        default: ""
    },

    lastName: {
        type: String,
        trim: true,
        default: ""
    },

    gender: {
        type: String
        // default: "",
        // match: [/M|F/]
    },

    phoneNumber: {
        type: String,
        // match: phonenumberValid,
        trim: true,
        default: ""
    },

    address: {
        type:addressSchema

    },

    birthday: {
    
        month: {
            type: String
        },

        day: {
            type: String
        },

        year: {
            type: String
        }

    },

    photo: {
        type: String
    },

    photoUrl: {
        type: String
    },

    profiles: {
    
        github: {
            type: String,
            default: ""
        },

        linkedIn: {
            type: String,
            default: ""
        },

        website: {
            type: String,
            default: ""
        }
    },


    skills: {
        type: [skillSchema],
    
    },
  
    jobStatus: {
        type: String,
        default: ""
    },

    jobTitle: {
        type: String,
        default: ""
    },

    email: {
        type: String,
        unique: true,
        match: emailValid,
        minlength: 1
    },
    password: {
        type:String
    },
    facebook: {
        id: {type: String},
        token: {type: String},
        email: {type: String},
        name: {type:String}
    },
    twitter: {
        id: {type:String},
        token: {type:String},
        displayName: {type:String},
        username: {type:String}
    },
    google: {
        id: {type:String},
        token: {type:String},
        email: {type:String},
        name: {type:String}
    },

    linkedin: {
        id: {type:String},
        token: {type: String},
        email: {type: String},
        name: {type:String}
    }

});


userSchema.methods.toJSON = function () {
    let user = this;
    let userObject = user.toObject();
    return _.pick(userObject, ['_id', 'firstName', 'lastName', 'email'])
};

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};


const User = mongoose.model('User', userSchema);

module.exports = User;