import * as types from "./types";
import axios from "axios";
import {browserHistory} from 'react-router';
import {SET_CURRENT_USER} from "./types";
import Utils from '../utils/utils';

let util = new Utils();

export const fecthEventsSuccess = (events) => {
    return {type: types.ADD_EVENT, events};
};


export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        user
    };
};

export const setErrors = (err) => {
    return {
        type:"SET_ERROR",
        err
    }
};


export const login = (url, user, path, container) => {
    return (dispatch) => {

        return axios({
            method: 'POST',
            url: url,
            data: user,
            headers:{
                'Content-Type': 'application/json',
                "x-auth":'Esterling'
            }
        })
            .then(response => {
                if (response.data.token) {
                    container.success(`You have successfully been sign up`, `Congratulations`, {closeButton: true});
                    const token = response.data.token;
                    localStorage.setItem('token', JSON.stringify(token));
                    util.setAuthorizationToken(token);

                    dispatch(setCurrentUser(util.decodeToken(token)));

                    setTimeout(function () {
                        browserHistory.replace(path);
                    }, 1500);
                }
            })
            .catch(err => {
                dispatch(setErrors(err));
            } );
    };
};


export const fetchEvents = () => {
    const url = 'https://bootcruitapi.herokuapp.com/find/events?search=Javascript&lat=33.753746&long=-84.386330&id=59ffab83f272dd0012107667';

    return (dispatch) => {
        return axios.get(url)
            .then((response) => {
                dispatch(fecthEventsSuccess(response.data));
            })
            .catch((err) => {
                throw err;
            });
    };
};

