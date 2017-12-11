import {
    USER_PROFILE,
    UPDATE_ADDRESS
} from "../actions/types";


export default function meetupReducer(state = {}, action) {
    switch (action.type) {
        case USER_PROFILE:
            console.log("Action: ", action.profile);
            return {
                ...state,
                ...state.address,
                ...action.profile
            };
            break;
        //
        // case UPDATE_ADDRESS:
        //     return {
        //         ...state,
        //         ...state.address, ...action.profile
        //     };
        default:
            return state;
    }
}
