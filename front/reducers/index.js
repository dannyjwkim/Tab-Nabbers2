import React from "react";
import {combineReducers} from "redux";
import events from "./meetupReducers";
import passwordmatch from "./passwordMatchReducers";


const allReducers = combineReducers({
    events,
    passwordmatch,
});


export default allReducers;
