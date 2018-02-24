const initial_state = {
    authenticated: false,
    pending: false,
    search:""
};


const user = (state = initial_state, action) => {

    switch (action.type) {
        case "LOGOUT":
            return {
                ...state,
                authenticated: false
            };

        case "GET_VALUE":
            return {
                ...state,
                ...action.data,
                error: {
                    ...state.error,
                    login: "",
                    signup: ""
                }
            };

        case "GET_LOCATION_FULFILLED":
            return {
                ...state,
                location: { ...action.payload.data }
            };


        default:
            return state;
    }
}

export default user;