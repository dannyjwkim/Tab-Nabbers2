import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./signin.css";
import {
    Input
} from "../../components";
import {
    login,
    getValues
} from "../../actions";


export class Signin extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    submit = (event) => {
        event.preventDefault();
        const url = "/secure/signin";
        const {
            email,
            password
        } = this.props.user;

        this.props.dispatch(login(url, {
            email,
            password
        }));
    };


    getValues = ({
        target: {
        name,
        value
        }
    }) => {
        const data = { [name]: value };
        this.props.dispatch(getValues(data));
    };


    componentWillReceiveProps(props) {
        if (props.user.authenticated)
            this.props.history.push('/dashboard');

    }

    render() {

        console.log("Props: ", this.props.user);
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

                <Join {...this.props} submit={this.submit} getValues={this.getValues} />


            </div>
        );
    }
}

const Join = (props) => {
    const error = props.user.error.login;

    const errorMessage = error ? <div className="ui message error">
        <p>{error}</p>
    </div> : null

    return (
        <div className="flex center main-center column landing_content">

            {errorMessage}

            <form >
                <Input name="email" onChange={props.getValues} />

                <Input name="password" sub_text="(min. 6 char)" onChange={props.getValues} />

                <button className="btn" onClick={props.submit}> Login </button>

            </form>
            <p>By joining, you agree to the Terms and Privacy Policy.</p>
        </div>
    )
}


const mapPropsToState = (state) => {
    return {
        user: state.user
    }
};

export default connect(mapPropsToState)(Signin);