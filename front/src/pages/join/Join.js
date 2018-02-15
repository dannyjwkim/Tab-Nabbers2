import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import "./join.css";
import {
    Input
} from "../../components";
import {
    connect
} from "react-redux";
import {
    signup,
    getValues
} from "../../actions";

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
        } = this.props.user;

        this.props.dispatch(signup(url, {
            email,
            password,
            name
        }));
    };

    componentWillReceiveProps(props) {
        if (props.user.authenticated)
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

    const error = props.user.error.login;

    const errorMessage = error ? <div className="ui message error">
        <p>{error}</p>
    </div> : null


    return (
        <div className="flex center main-center column landing_content">
            {errorMessage}
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


const mapPropsToState = (state) => {
    return {
        user: state.user
    }
};
export default connect(mapPropsToState)(Landing);