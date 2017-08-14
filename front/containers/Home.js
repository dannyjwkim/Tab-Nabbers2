import React from "react";

import { Link } from "react-router";

import "../public/css/signup.scss";


class Home extends React.Component{

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

                   <div className="login__btn-container">
                       <a href="/authenticate/auth/google">Google Sign Up</a>
                       <a href="/authenticate/auth/twitter">Twitter Sign In</a>
                       <a href="/authenticate/auth/linkedin">Linkedin Sign In</a>
                       <a href="/authenticate/auth/facebook">Facebook Sign In</a>
                   </div>
                </div>
            </div>
        )
    }
}

export default Home;
