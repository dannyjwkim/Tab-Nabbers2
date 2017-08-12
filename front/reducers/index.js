/**
 * Created by ea375w on 7/19/2017.
 */


import React from "react";


// Using Combine Reducers to combine all the reducers together.
import {combineReducers} from "redux";




import test from "./small";
import overview from "./overview";

const allReducers = combineReducers({

    test:test,
    overview: overview

});


export default allReducers;