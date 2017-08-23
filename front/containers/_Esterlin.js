import React from "react";

import { Link } from "react-router";

import Signup from "../components/signup";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../utils/newApi";

import {Col, Button, Row, Icon, Input} from "react-materialize";



class Home extends React.Component{

    constructor(){
        super();

        this.state = {
            email:'',
            password:'',
            usernameField:'',
            passwordField:''

        };

        this.signUp = this.signUp.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signIn = this.signIn.bind(this);

    }

    signUp(){

        api.signup_User(this.state)
            .then(function (data) {
                console.log("Hello World");
            })
            .catch(function (err) {
                console.log("Not working");
            });

    }

    signIn(){

        //console.log(this.state);

        const {usernameField, passwordField} = this.state;

        const user = {
            usernameField:usernameField,
            passwordField:passwordField
        };

        console.log(user);

        api.signIn_User(user)
            .then(function (data) {
                console.log("User signed in");
            })
            .catch(function (err) {
                console.log("Error");
            });

    }

    handleChange(e){
        this.setState({[e.target.name]:e.target.value});

        console.log("Hello World!!");

    }

    render(){
        return(
            <div>

                <Navbar/>

                {/*<h1>Bootcruit</h1>*/}

                {/*<p>Single Click Staffing Solutions</p>*/}

                {/*<div className="login__btn-container">*/}
                    {/*<Link to="/recruiter"><button className="ui primary basic button">Employer</button> </Link>*/}
                    {/*<Link to="/student"><button className="ui positive basic button">Student</button> </Link>*/}
                {/*</div>*/}
                <Signup handleChange= {this.handleChange} signUp ={this.signUp}>
                    Sign up
                </Signup>


                <Col l={7} className='login__form'>
                    <p className="center">Sign in with</p>
                    <Input l={12} label="Username or Email" name='usernameField' onChange={this.handleChange}><Icon>person</Icon></Input>
                    <Input l={12} label="Password" name='passwordField' onChange={this.handleChange}><Icon>lock_outline</Icon></Input>

                    <Button onClick={this.signIn}>Sign in</Button>
                </Col>




                <Footer/>

            </div>
    )
    }
}


export default Home;
