import axios from "axios";


export const signup = (url, data) => {
    return{
        type:"SIGN_UP",
        payload: axios({
            url,
            method:"POST",
            data
        })
    }
};


export const login = (url, data) => {
    return {
        type:"SIGNIN_IN",
        payload: axios({
            url, 
            method:"POST",
            data
        })
    }
};


export const getValues = (data) => {
    return{
        type:"GET_VALUE",
        data
    };
};


/**
 * Temporary logout for now
 */
export const logout = () => {
    return {
        type:"LOGOUT",
        
    }
};