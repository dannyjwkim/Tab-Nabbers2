/**
 * Import modules and components to render on the home page
 * also import the home scss as well
 */
import React from "react";
import Modal from '../components/common/Modal';
import {Signup, Signin} from '../components/StudentLogin/index';
import '../public/css/home.scss';
import Utils from '../utils/utils';
import {ToastContainer} from "react-toastr";
import { login } from '../actions/actions';
import {connect} from 'react-redux';


const util = new Utils();


/**
 * Home component that renders the home page
 * Every modal has a button attached that helps firing the Modal on click
 * @constructor Home
 */
class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            isSignIn: true,
            email: '',
            password: '',
            username: ''
        };

        this.toggleSignUp = this.toggleSignUp.bind(this);
        this.authenticateUser = this.authenticateUser.bind(this);
        this.newUser = this.newUser.bind(this);
        this.existedUser = this.existedUser.bind(this);
    }

    componentWillMount() {

    }

    container;

    /**
     * Switching from Sign In and Sign Up Modal
     * @method toggleSignUp
     */
    toggleSignUp() {
        this.setState({isSignIn: !this.state.isSignIn});
    }


    /**
     * Setting the values in the state
     * @param event
     * @function authenticateUser
     */
    authenticateUser(event) {
        event.preventDefault();
        let {name, value} = event.target;
        this.setState({[name]: value});
    }


    /**
     * Sign up new student to Bootcruit
     * with email and password from the state
     * @method newUser
     */
    newUser() {
        const {email, password} = this.state;
        const user = {
            email,
            password
        };
        this.props.dispatch(login('/signup', user, '/profile', this.container));
    }


    /**
     * Sign in existed student into Bootcruit
     * with email and password
     * @param event
     * @method existedUser
     */
    existedUser(event) {
        event.preventDefault();
        const {email, password} = this.state;
        const user = {email, password};
        this.props.dispatch(login('/login', user, '/profile', this.container));
    }


    render() {


        let employer = 'Employer';
        let student = 'Student';

        const {isSignIn} = this.state;
        return (
            <div className="home--component layout">
                <ToastContainer
                    ref={ref => this.container = ref}
                    className="toast-top-right"
                />

                <div className="banner--list layout">
                    <h1>Bootcruit</h1>
                    <ul className="layout">
                        <li>About</li>
                        <li>Feature</li>
                        <li>Contact</li>
                    </ul>
                </div>


                <h3> Bootcruit </h3>
                <p>Single-Click Staffing Solutions</p>
                <div className="buttons--container">

                    <Modal
                        name={employer} title={isSignIn ? 'Employer Sign up ' : 'Employer Login '}
                        toggleSignUp={this.toggleSignUp}
                        footer={isSignIn ? 'Already have an account?' : 'Or Create an account?'}
                    >
                        {isSignIn ? <Signup/> : <Signin/>}
                    </Modal>


                    <Modal
                        name={student}
                        title={isSignIn ? 'Student Sign Up ' : 'Student Sign In'}
                        footer={isSignIn ? 'Already have an account?' : 'Or Create an account?'}
                        toggleSignUp={this.toggleSignUp}>
                        {
                            isSignIn ?
                                <Signup
                                    authenticate={this.authenticateUser}
                                    newUser={this.newUser}/> :
                                <Signin
                                    authenticate={this.authenticateUser}
                                    existedUser={this.existedUser}/>
                        }
                    </Modal>
                </div>
            </div>
        );
    }
}


export default connect(null, null)(Home);
