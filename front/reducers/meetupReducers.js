import {ADD_EVENT} from "../actions/actionTypes";


export default function meetupReducer (state = {events:[]}, action) {
    switch(action.type){
        case ADD_EVENT:
            return( 
                Object.assign( 
                    {}, state, 
                    {events: [...state.events, action.events]})
            );
                    
        default:
            return state;
    }
}
