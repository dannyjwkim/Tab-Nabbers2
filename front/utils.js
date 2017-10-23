import axios from 'axios';
import {browserHistory} from 'react-router';


module.exports = {


    sendData: (url, data) => {
        axios({
            method:'POST',
            url:url,
            data:data
        })
            .then((response) => {
                if(response.headers['x-auth']){
                    const token = response.headers['x-auth'];
                    localStorage.setItem('token', token);
                    browserHistory.replace('/profile')
                }

            })
            .catch((err ) => {
                console.log('Error: :', err);
                alert("User already exist. Please try a different user");

            });
    }

};
