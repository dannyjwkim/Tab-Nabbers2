import * as types from "./types";
import axios from "axios";
import {browserHistory} from 'react-router';
import {SET_CURRENT_USER} from "./types";
import Utils from '../utils/utils';

let util = new Utils();

export const fecthEventsSuccess = (events) => {
    return {type: types.ADD_EVENT, events};
};


/**
 * Set current user info into the redux store
 *
 * @param user
 * @returns {{type, user: *}}
 */
export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        user
    };
};


/**
 * Set errors in case there is error
 * @param err
 * @returns {{type: string, err: *}}
 */
export const setErrors = (err) => {
    return {
        type:'SET_ERROR',
        err
    }
};


/**
 * Sending the user info to either
 * sign up or sign in the user
 * Store user crendetials (Token, and user email and id)
 * in the local storage
 * Set token every http calls via axios
 * @param url
 * @param user
 * @param path
 * @param container
 * @returns {function(*)}
 */
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

                    util.setCredentials(token);

                    dispatch(setCurrentUser(util.decodeToken(token)));

                    setTimeout(function () {
                        browserHistory.replace(path);
                    }, 1000);
                }
            })
            .catch(err => {
                container.error(`${err.response.data.error}`, `Ooops`, { closeButton: true })
                dispatch(setErrors(err));
            } );
    };
};


/**
 * Getting data from Meet Up API
 * Dispatch them into fetchEventSuccess
 * @method fetchEvents
 * @returns {function(*)}
 */
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

