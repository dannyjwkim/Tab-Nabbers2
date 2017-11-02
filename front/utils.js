import axios from 'axios';
import {browserHistory} from 'react-router';


module.exports = {

    authentication: (url, data, path, container) => {
        axios({
            method:'POST',
            url:url,
            data:data
        })
            .then((response) => {
                if(response.headers['x-auth']){
                    container.success(`You have successfully been sign up`, `Congratulations`, { closeButton: true });
                    const token = response.headers['x-auth'];
                    const user_id = response.data.user_id;
                    const user = {user_id, token};
                    localStorage.setItem('token', JSON.stringify(user));
                    setTimeout(function () {
                        browserHistory.replace(path)
                    }, 1500)
                }
            })
            .catch((err) => {
              container.error(`${err.response.data.error}`, `Ooops`, { closeButton: true })
            });
    }

};
