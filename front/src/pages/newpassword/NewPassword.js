import React, { Component } from 'react';
import axios from "axios";

class NewPassword extends Component {

    getValues = ({
        target:{
            name,
            value
        }
    }) => this.setState({ [name]: value});

    submit = (event) => {
        event.preventDefault();

        axios({
            url:"/secure/resetyourpassword",
            method: "POST",
            data: {
                password: this.state.password,
                token: this.props.match.params.token
            }
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
                <form className = "ui form">
                <h2>Please enter your new password</h2>
                    <div>
                        <label htmlFor="password"></label>
                        <input type="password" name = "password" placeholder = "Enter your new password" onChange = {this.getValues} />
                    </div>
                    
                    <button className = "ui primary basic button" onClick = {this.submit}>Reset </button>
                </form>
            </div>
        );
    }
}

export default NewPassword;