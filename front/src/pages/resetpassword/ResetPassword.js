import React, { Component } from 'react';
import axios from "axios";

class ResetPassword extends Component {


    constructor(props) {
        super(props);
        this.state = {};
    }


    getValues = ({
        target: {
            name, 
            value
        }
    }) => this.setState({ [name ]: value });

    submit = (event) => {
        event.preventDefault();

        axios({
            url:"/secure/resetpassword",
            method: "POST",
            data: this.state
        })
        .then((response) => {
            console.log("Response: ", response);
        })
        .catch((err) => {
            console.log("Error: ", err);
        });
        
    };
    
    render() {
        return (
            <div>
                <form className="ui form">
                    <div>
                        <label htmlFor="email">Reset Password</label>
                        <input type="text" name = "email" placeholder = "Enter your email" onChange = {this.getValues}/>
                    </div>


                    <button className = "ui basic primary button" onClick = {this.submit}>Reset Password </button>
                </form>
            </div>
        );
    }
}

export default ResetPassword;