import React from "react";
import {combineReducers} from "redux";
import events from "../reducers/meetupReducers";
import profile from "../reducers/user_profile";
import passwordmatch from "./passwordMatchReducers";
import auth from "./auth";


const allReducers = combineReducers({
    events,
    passwordmatch,
    auth,
    profile
});


export default allReducers;
