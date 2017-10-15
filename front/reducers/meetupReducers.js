import * as types from "../actions/actionTypes";

export default function meetupReducer (state = [], action) {
    switch(action.type){
        case types.GET_EVENT:
            return [
                ...state, Object.assign({}, action.events)
            ];
        default:
            return state;
    }
}