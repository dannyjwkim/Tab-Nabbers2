import * as types from "../actions/actionTypes";

// export function itemsHasErrored(state = false, action) {
//     switch (action.type) {
//         case 'ITEMS_HAS_ERRORED':
//             return action.hasErrored;
//
//         default:
//             return state;
//     }
// }
//
// export function itemsIsLoading(state = false, action) {
//     switch (action.type) {
//         case 'ITEMS_IS_LOADING':
//             return action.isLoading;
//
//         default:
//             return state;
//     }
// }
//
// export function items(state = [], action) {
//     switch (action.type) {
//         case 'ITEMS_FETCH_DATA_SUCCESS':
//             return action.items;
//
//         default:
//             return state;
//     }
// }


export default function meetupReducer (state = {events:[]}, action) {
    switch(action.type){
        case types.ADD_EVENT:
            return( 
                Object.assign( 
                    {}, state, 
                    {events: [...state.events, action.events]})
                )
                    
        default:
        return state;
            }
    }
