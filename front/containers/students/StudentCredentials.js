/**
 * Created by ea375w on 7/19/2017.
 */
import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

import {connect} from "react-redux";
import fetch from "../../utils/api";
import "../../public/css/login.scss";
import Signin from "./pieces/signin";
import Signup from "./pieces/signup";

class StudentCredentials extends React.Component {

    constructor(){
        super();

        this.state = {
            active:true
        }

    };

    signinView = () => {
        this.setState({ active: true });
    };

    signupView = () => {
        this.setState({ active: false });

    };

    handleSubmit(event) {

        const [credentials] = this.props.credentials;
        const {active, firstname, lastname, email, password, bootcampId, bootcamp, cohort } = credentials;


        event.preventDefault();
        var nullFields = 0;
        var user = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            bootcampId: bootcamp,
            cohortId: cohort
        };
        for (var prop in user) {
            if (user[prop] === null) {
                nullFields++;
                console.log("%s field is null", prop);
            }
        }
        if (nullFields === 0) {

            fetch.signup(user).then(function(data) {
                localStorage.setItem("userID", data.data.id);
                localStorage.setItem("token", data.data.token);
                location.href = "/profile";

            }).catch(function(err) {
                console.log(err);
            })
        } else {
            console.log("All fields required");
        }
    };

    //Axios Calls for retrieveing Bootcamp and Cohort information to populate dropdowns
    getBootcamps() {
        axios.get("/bootcamps").then((bcamps) => {
            this.setState({
                bootcamps: bcamps.data,
                bootcamp: bcamps.data[0].id
            }, this.getCohorts);
        }).catch(function(err) {
            console.log(err)
        });
    }

    getCohorts() {
        axios.post("/cohorts", {
            bootcampId: this.state.bootcamp
        }).then((cohorts) => {
            this.setState({
                cohorts: cohorts.data,
                cohort: cohorts.data[0].id
            });
        }).catch(function(err) {
            console.log(err);
        })
    }

    //Functions to populate dropdown menus for bootcamp and cohort
    setBootcampOptions() {
        var bootcampOptions = this.props.credentials.bootcamps.map(function(b) {
            return (
                <option key={b.id} value={b.id}>{b.institution}</option>
            )
        });
        return bootcampOptions;
    }

    setCohortOptions() {
        var cohortOptions = this.props.credentials.cohorts.map(function(c) {
            return (
                <option key={c.id} value={c.id}>{c.cohort}</option>
            )
        });
        return cohortOptions;
    }

    // componentDidMount(){
    //   console.log(this.props.credentials);
    // };



    render() {

        const [credentials] = this.props.credentials;

        const {active } = credentials;

        return (
            <div className="sicontainer ui one column center aligned grid">
                <div className="signin column six wide form-holder">

                    <div className="button-container">
                        <div className={active ? "field active": "field" } onClick={this.signinView}>
                            <input type="submit" value="Sign in" className="ui button" />
                        </div>

                        <div className={active ? "field right": "field active right" } onClick={this.signupView}>
                            <input type="submit" value="Sign up" className="ui button"/>
                        </div>
                    </div>

                    <h2 className="center aligned header form-head">{active ? "Student - Sign in" : "Student - Sign up"}</h2>

                    {
                        this.state.active ?
                            <Signin {...credentials} handleSubmit = {this.handleSubmit}/>

                            : <Signup {...credentials}
                                      handleSubmit={this.handleSubmit}
                                      bootcampOptions={this.setBootcampOptions}
                                      cohortOptions = {this.setCohortOptions}/>

                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        credentials: state.credentials
    }
}


export default connect(mapStateToProps)(StudentCredentials);