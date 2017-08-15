import React from "react";

import { Link } from "react-router";

// import "../public/css/signup.scss";

import { Button, Icon } from "react-materialize";


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

                       <a href="/authenticate/auth/google"><Button waves='light'>Google</Button></a>
                       <a href="/authenticate/auth/twitter"><Button waves='light'>Twitter</Button></a>
                       <a href="/authenticate/auth/linkedin"><Button waves='light'>LinkedIn</Button></a>
                       <a href="/authenticate/auth/facebook"><Button waves='light'>Facebook</Button></a>
                   </div>
                </div>
            </div>
        )
    }
}

export default Home;
