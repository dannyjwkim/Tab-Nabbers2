/**
 * Created by ea375w on 7/19/2017.
 */


import React from "react";


import {combineReducers} from "redux";

import overview from "./overview";
import credentials from "./credentials";

const allReducers = combineReducers({
    overview,
    credentials
});


export default allReducers;