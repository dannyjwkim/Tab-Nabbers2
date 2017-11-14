import {
    ADD_EVENT,
    SIGN_USER
} from "../actions/types";


export default function meetupReducer (state = {events:[]}, action) {
    switch(action.type){
        case ADD_EVENT:
            return Object.assign({}, state, {events:action.events});
        case SIGN_USER:
            return [
                ...state, action.user
            ];
                    
        default:
            return state;
    }
}
