/**
 * Created by esterlingaccime on 8/19/17.
 */

import axios from "axios";

const API = {

    signup_User:function (user) {
        return axios.post('/signup', user);
    },


    signIn_User:function (user) {
        return axios.post("/login", user);
    }
};

export default API;