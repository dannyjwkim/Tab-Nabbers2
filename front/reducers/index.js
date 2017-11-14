import React from "react";
import {combineReducers} from "redux";
import events from "../reducers/meetupReducers";
import passwordmatch from "./passwordMatchReducers";
import auth from "./auth";


const allReducers = combineReducers({
    events,
    passwordmatch,
    auth
});


export default allReducers;
