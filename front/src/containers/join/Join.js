import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import "./join.css";
import {
    connect
} from "react-redux";
import {
    signup,
    getValues
} from "./actions";

export class Landing extends Component {

    constructor(props) {
        super(props);
        this.state = {}; // {name: "", email: "", password: ""}
    }


    submit = (event) => {
        event.preventDefault();
        const url = "/secure/signup";
        const {
            email,
            password,
            name
        } = this.props.signup;

        this.props.dispatch(signup(url, {
            email,
            password,
            name
        }));
    };

    componentWillReceiveProps(props) {
        if (props.signup.authenticated)
            this.props.history.push('/dashboard');

    }


    getValues = ({
        target: {
        name,
        value
    } }) => {
        const data = { [name]: value };
        this.props.dispatch(getValues(data));
    };


    render() {

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
    const pending = props.signup.pending;
    const error = props.signup.error;

    const errorMessage = error ? <div className="ui message error">
        <p>{error}</p>
    </div> : null;

    const errorClass = error ? "error" : null;
    const pendingClass = pending ? "loading" : null;


    return (
        <div className="flex center main-center column landing_content">
            {errorMessage}
            <form className={"ui form " + pendingClass} onSubmit = {props.submit}>

                <div className="field">
                    <label>Name <span>(Firstname and Lastname)</span></label>
                    <input required type="text" name="name" placeholder="Name"  onChange={props.getValues}  />
                </div>

 
                <div className={"field " + errorClass}>
                    <label>Email </label>
                    <input required type="text" name="email" placeholder="Email"  onChange={props.getValues}  />
                </div>



                <div className="field">
                    <label>Password <span>(min. 6 char)</span></label>
                    <input required type="password" name="password" placeholder="Password"  onChange={props.getValues}  />
                </div>

                <button className="btn " > Join </button>

            </form>
            <p>By joining, you agree to the Terms and Privacy Policy.</p>
        </div>
    )
}


const mapPropsToState = (state) => {
    return {
        signup: state.signup
    }
};
export default connect(mapPropsToState)(Landing);