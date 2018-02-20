const initial_state = {
    error: {
        login: "",
        signup: "",
    },
    authenticated: false,
    pending: false,
    search:""
};

const user = (state = initial_state, action) => {

    switch (action.type) {
        case "SIGNIN_IN_FULFILLED":
        case "SIGN_UP_FULFILLED":
            return {
                ...state,
                authenticated: true,
                pending: false
            };
        case "SIGNIN_IN_REJECTED":
        case "SIGN_UP_REJECTED":
            return {
                ...state,
                error: {
                    ...state.error,
                    login: action.payload.response.data.error
                },
                pending: false
            };
        case "SIGNIN_IN_PENDING":
            return {
                ...state,
                pending: true
            };

        case "SIGN_UP_PENDING":
            return {
                ...state,
                pending: true
            };

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
                location: {...action.payload.data}
            };


        default:
            return state;
    }
}

export default user;