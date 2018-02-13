import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./signin.css";
import {
    Input
} from "../../components";
import axios from "axios";
import { NotificationContainer, NotificationManager } from 'react-notifications';


export class Signin extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    

    submit = (event) => {
        event.preventDefault();

        axios({
            url:"/secure/signin",
            method:"POST",
            data: this.state
        })
        .then((response) => {
            this.props.history.push('/dashboard');
        })
        .catch((err) => {
            NotificationManager.error(err.response.data.error);
        })
    };

    getValues = ({
        target:{
            name,
            value
        }
    }) => this.setState({[name] : value });


    
    render() {

        console.log("State: ", this.state);

        return (
            <div className="login landing flex center ">

                <div className="credentials_btn">
                    <button className="active">Login</button>
                    <Link to="/join"><button className="">Join</button></ Link>
                    
                </div>


                <div className="landing_sidebar flex center column main-center signin">
                    {
                        // TODO
                        // Display contents into the sidebar
                    }
                </div>

                <Join {...this.props} submit={this.submit} getValues = {this.getValues} />

                <NotificationContainer />

            </div>
        );
    }
}

const Join = (props) => {
    return (
        <div className="flex center main-center column landing_content">
            <form >
                <Input name="email" onChange = {props.getValues}/>

                <Input name="password" sub_text="(min. 6 char)"  onChange = {props.getValues}/>

                <button className="btn" onClick={props.submit}> Login </button>

            </form>
            <p>By joining, you agree to the Terms and Privacy Policy.</p>
        </div>
    )
}

export default Signin;