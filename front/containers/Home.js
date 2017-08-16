import React from "react";

import { Link } from "react-router";

// import "../public/css/signup.scss";

import { Button, Icon, Row, Input } from "react-materialize";
// import Signup from "../components/signup";


class Home extends React.Component{

    constructor(){
        super();

    }

    signUp(){
        console.log("Hello World!!");

        console.log(this);

       // const {email, password } = this;
    }

    render(){
        return(
            <div className="content ui centered grid">
                <div className="content">
                    <div className="center">

                        <h1>Bootcruit</h1>

                        <p>Single Click Staffing Solutions</p>

                        <div className="login__btn-container">
                            <Link to="/recruiter"><button className="ui primary basic button">Employer</button> </Link>
                            <Link to="/student"><button className="ui positive basic button">Student</button> </Link>
                        </div>

                    </div>


                    <Row>
                        <Input type="email" placeholder="Enter your email..." s={6} label="Email"/>
                        <Input type="password" s={6} label="Password" placeholder="Enter your password...">
                        <button onClick={this.signUp}>Sign Up</button>
                    </Row>

                   <div className="login__btn-container">

                       <a href="/authenticate/auth/google"><Button waves='light'>Google</Button></a>
                       <a href="/auth/twitter"><Button waves='light'>Twitter</Button></a>
                       <a href="/auth/linkedin"><Button waves='light'>LinkedIn</Button></a>
                       <a href="/auth/facebook"><Button waves='light'>Facebook</Button></a>
                   </div>
                </div>
            </div>
        )
    }
}

export default Home;
