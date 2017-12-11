import axios from 'axios';
import {browserHistory} from 'react-router';
import jwt from 'jsonwebtoken';


export default class Utils {

    setAuthorizationToken = (token) => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            delete axios.defaults.headers.common['Authorization'];
        }
    };

    decodeToken = (token) => {
        return jwt.decode(token);
    };

    setCredentials = (token) => {
        const isAuthenticated = true;
        const credentials = {
            token,
            isAuthenticated,
            user: this.decodeToken(token)
        };
        localStorage.setItem('credentials', JSON.stringify(credentials));
        this.setAuthorizationToken(token);
    };


    sendData = (url, data) => {
        let user = this.credentials();
        return axios({
            url,
            method:'POST',
            headers:{
                'x-bootcruit-token': user.token,
                'x-email':user.user.email,
                'x-id': user.user.id
            },
            data
        })
    };

    credentials = () => {
        return JSON.parse(localStorage.credentials);
    };
}






