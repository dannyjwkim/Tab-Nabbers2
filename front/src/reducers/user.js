const initial_state = {
    error: {
        login: "",
        signup: "",
    },
    authenticated: false

};

const user = (state = initial_state, action) => {

    switch (action.type) {
        case "SIGNIN_IN_FULFILLED":
        case "SIGN_UP_FULFILLED":
            return {
                ...state,
                authenticated: true
            };
        case "SIGNIN_IN_REJECTED":
        case "SIGN_UP_REJECTED":
            return {
                ...state,
                error: {
                    ...state.error,
                    login: action.payload.response.data.error
                }
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
        default:
            return state;
    }
}

export default user;