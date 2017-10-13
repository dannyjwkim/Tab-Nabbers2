
import React from "react";
import {connect} from "react-redux";
import Modal from '../components/common/Modal';
import SignUp from '../components/signup/signup';
import '../public/css/home.scss';


/**
 * Home component that renders the home page
 * Every modal has a button attached that helps firing the Modal on click
 */
class Home extends React.Component{
    constructor(){
        super();

        this.state = {
            isSignIn:false,
            isSignUp:false
        };

        this.toggleSignUp = this.toggleSignUp.bind(this);
    }

    /**
     * Switching from Sign In and Sign Up Modal
     * Sign in = true, set Sign up to true, and set sign in to false (Show Sign Up)
     * Sign Up = true, set Sign in to true, and set sign up to false (Show Sign In)
     * Both of them = false, then set the Sign up = true (Show up)
     * @method toggleSignUp
     */
    toggleSignUp() {
        const {isSignIn, isSignUp} = this.state;
        if(isSignIn){
            this.setState({isSignUp: true, isSignIn: false})
        }

        else if(isSignUp) {
            this.setState({isSignIn: true, isSignUp: false})
        } else{
            this.setState({isSignUp: true})
        }
    }


    render(){

        let employer = 'Employer';
        let student = 'Student';

        const {isSignIn, isSignUp} = this.state;
        return(
            <div className="home--component">



                <h3>Bootcruit</h3>
                <p>Single-Click Staffing Solutions</p>
                <div className="buttons--container">
                    <Modal name = {employer} title = {'Employer Login '}>
                        <SignUp />
                    </Modal>


                    <div className="hide">
                        <Modal
                            name = {"Sign"}
                            title = {'Sign In '}
                            toggleSignUp = {this.toggleSignUp}
                            isSignIn = {isSignIn}>
                            I am the Sign In Page
                        </Modal>
                    </div>



                    <Modal
                        name = {student}
                        title = {'Student Login'}
                        isSignUp = {isSignUp}
                        toggleSignUp = {this.toggleSignUp} >
                        <SignUp />
                    </Modal>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        // here
        // Getting data from Redux here
        // and set pass it as props
    }
}

export default connect(mapStateToProps)(Home);
