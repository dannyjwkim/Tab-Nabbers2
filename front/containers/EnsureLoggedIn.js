import React from 'react';
import {browserHistory} from 'react-router';


/**
 * Ensuring the user is authenticated
 * So it can get access to all the private routes
 * Checking before the children
 * @method EnsureLoggedIn Component
 */

export default class EnsureLoggedIn extends React.Component {

    componentWillMount() {
        try {
            let {isAuthenticated} = JSON.parse(localStorage.getItem('credentials'));
            if (isAuthenticated) {
                return null;
            } else{
                browserHistory.replace('/');
            }
        } catch(err) {
            browserHistory.replace('/');
        }
    }

    render() {
        return this.props.children;
    }
}


