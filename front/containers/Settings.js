
import React from 'react';
import '../public/css/settings.scss';


class Settings extends React.Component{

    render(){

        let container;

        return(
            <div className="settings">

                <div className="change">
                    <h4>Email address</h4>
                    <p>Add or remove email addresses on your account</p>
                </div>


                 <div className="change">
                    <h4>Change Password </h4>
                    <p>Choose a unique password to protect your account</p>
                </div>


                 <div className="change">
                    <h4>Open</h4>
                    <p>Let employer knows that you're open for new positions</p>
                </div>


                 <div className="change">
                    <h4>Language</h4>
                    <p>Select the language you use on Bootcruit</p>
                </div>


                 <div className="change">
                    <h4>Closing your Bootcruit Account</h4>
                    <p>Learn about your options, and close your account if you wish</p>
                </div>

            </div>
        );
    }
}

export default Settings;