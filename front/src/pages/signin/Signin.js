import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./signin.css";
import {
    Input
} from "../../components";


export class Signin extends Component {


    submit = (event) => {
        event.preventDefault();
        this.props.history.push('/dashboard')
    };
    render() {

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

                <Join {...this.props} submit={this.submit} />

            </div>
        );
    }
}

const Join = (props) => {
    return (
        <div className="flex center main-center column landing_content">
            <form >
                <Input name="email" />

                <Input name="password" sub_text="(min. 6 char)" />

                <button className="btn" onClick={props.submit}> Login </button>

            </form>
            <p>By joining, you agree to the Terms and Privacy Policy.</p>
        </div>
    )
}

export default Signin;