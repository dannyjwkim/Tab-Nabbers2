import axios from 'axios';
import {browserHistory} from 'react-router';


module.exports = {


    authentication: (url, data, path) => {
        axios({
            method:'POST',
            url:url,
            data:data
        })
            .then((response) => {
                if(response.headers['x-auth']){
                    const token = response.headers['x-auth'];
                    const user_id = response.data.user_id;
                    const user = {user_id, token};
                    localStorage.setItem('token', JSON.stringify(user));
                    browserHistory.replace(path)
                }

            })
            .catch((err) => {

              alert(err.response.data.error);
              console.log(err.response);
              console.log(err);

            });
    }

};
