import * as types from "../actions/actionTypes";


export default function meetupReducer (state = [], action) {
    switch(action.type){
        case types.ADD_EVENT:
            return( 
                Object.assign( 
                    {}, state, 
                    {events: [...state.events, action.events]})
                );
                    
        default:
        return state;
            }
    }
