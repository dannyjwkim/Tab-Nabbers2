
import React from "react";
import {connect} from "react-redux";
import Modal from '../components/common/Modal';
import SignUp from '../components/signup/signup';

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
        console.log("Sign In: ", isSignIn);
        console.log("Sign Up: ", isSignUp);
        return(
            <div>
                <Modal name = {employer} title = {'Employer Login '}>
                    <SignUp />
                </Modal>

                
                <Modal
                    name = {"Sign"}
                    title = {'Sign In '}
                    toggleSignUp = {this.toggleSignUp}
                    isSignIn = {isSignIn}>
                    I am the Sign In Page
                </Modal>



                <Modal
                    name = {student}
                    title = {'Student Login'}
                    isSignUp = {isSignUp}
                    toggleSignUp = {this.toggleSignUp} >
                    <SignUp />
                </Modal>
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
