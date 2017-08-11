/**
 * Created by ea375w on 7/19/2017.
 */


import React from "react";


// Using Combine Reducers to combine all the reducers together.
import {combineReducers} from "redux";




import test from "./small";
import studentInfo from "./studentInfo";

const allReducers = combineReducers({

    test:test,

    student_info: studentInfo

});


export default allReducers;