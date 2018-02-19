import {
    combineReducers
} from "redux";

import user from "./user";
import eventbrites from "./eventbrites";


const bootcruit = combineReducers({
    user,
    eventbrites
});


export default bootcruit;