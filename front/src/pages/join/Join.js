import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./join.css";
import {
    Input
} from "../../components";
import axios from "axios";

export class Landing extends Component {

    constructor(props) {
        super(props);
        this.state = {}; // {name: "", email: "", password: ""}
    }


    submit = (event) => {
        event.preventDefault();

        axios({
            url:"/secure/signup",
            method: "POST",
            data: this.state
        })
        .then((response) => {
            this.props.history.push('/dashboard');
        })
        .catch((err) => {
            console.log("Error");
        });


        
    };



    getValues = ({
        target: {
        name, 
        value
    }}) => this.setState({ [name]: value });


    render() {

        console.log("State: ", this.state);


        return (
            <div className="join landing flex center ">
                <div className="landing_sidebar flex center column main-center signup">
                    {
                        // TODO
                        // Display contents into the sidebar
                    }
                </div>

                <div className="credentials_btn">
                    <Link to="/"><button className="">Login</button></ Link>
                    <button className="active">Join</button>
                </div>


                <Join {...this.props} submit={this.submit} getValues={this.getValues} />

            </div>
        );
    }
}

const Join = (props) => {
    return (
        <div className="flex center main-center column landing_content">
            <form >
                <Input sub_text="(Firstname and Lastname)" name="name" onChange={props.getValues} />

                <Input name="email" onChange={props.getValues} />

                <Input name="password" sub_text="(min. 6 char)" onChange={props.getValues} />

                <button className="btn" onClick={props.submit}> Join </button>

            </form>
            <p>By joining, you agree to the Terms and Privacy Policy.</p>
        </div>
    )
}

export default Landing;