import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./join.css";
import {
    Input
} from "../../components";


export class Landing extends Component {


    submit = (event) => {
        event.preventDefault();
        this.props.history.push('/dashboard')
    };
    render() {

        return (
            <div className="landing flex center ">

                <div className="credentials_btn">
                    <Link to="/"><button className="">Login</button></ Link>
                    <button className="active">Join</button>
                </div>


                <div className="landing_sidebar flex center column main-center signup">
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
                <Input sub_text="(Firstname and Lastname)" name="name" />

                <Input name="email" />

                <Input name="password" sub_text="(min. 6 char)" />

                <button className="btn" onClick={props.submit}> Join </button>

            </form>
            <p>By joining, you agree to the Terms and Privacy Policy.</p>
        </div>
    )
}

export default Landing;