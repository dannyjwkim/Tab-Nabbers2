import axios from 'axios';
import {browserHistory} from 'react-router';
import jwt from 'jsonwebtoken';


export default class Utils {
    // authentication(url, user, path, container) {
    //     axios({
    //         method: 'POST',
    //         url: url,
    //         data: user
    //     })
    //         .then((response) => {
    //             if (response.data.token) {
    //                 container.success(`You have successfully been sign up`, `Congratulations`, {closeButton: true});
    //                 const token = response.data.token;
    //                 localStorage.setItem('token', JSON.stringify(token));
    //
    //                 this.setAuthorizationToken(token);
    //
    //                 setTimeout(function () {
    //                     browserHistory.replace(path);
    //                 }, 1500);
    //             }
    //         })
    //         .catch((err) => {
    //             container.error(`${err.response.data.error}`, `Ooops`, {closeButton: true});
    //         });
    // };

    setAuthorizationToken(token) {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            delete axios.defaults.headers.common['Authorization'];
        }
    };

    decodeToken(token){
        console.log(jwt.decode(token));
    }
}






