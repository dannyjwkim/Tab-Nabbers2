
import React from "react";
import { Button, Icon } from 'semantic-ui-react';
import "../../public/css/home.scss";

const Signup = () => {

    return (
       
            

            <div className="container mainContainer">
                <div className="container sideContainer">
                <h1 className="leftHeading">Sign up</h1>
                <input type="text" className="userName input" placeholder="Username"/>
                <hr className="horizontalLine"/>
                <input type="email" className="email input" placeholder="E-Mail"/>
                <hr className="horizontalLine"/>
                <input type="password" className="password input" placeholder="Password"/>
                <hr className="horizontalLine"/>
                <input type="password" className="repeatPassword input" placeholder="Retype Password"/>
                <hr className="horizontalLine"/>
                <h6 className="correct">Please Retype the Correct Password.</h6>
                <button className="btn btn-info button" type="submit" name="action">Sign Up
                <i className="material-icons right"></i>
          </button>
        </div>
        <div className="container rightContainer">
            <h1 className="rightHeading"><span className="up">Sign In with</span><br/>Social Network</h1>
            <a href="/auth/facebook"><Button color="facebook"><Icon name="facebook"/>Log In with Facebook</Button></a>
            <a href="/auth/twitter"><Button color = "twitter"><Icon name="twitter"/>Log In with Twitter</Button></a>
            <a href="/auth/google"><Button color="google plus"><Icon name="google plus"/>Log In with Google+</Button></a>
            <a href="/auth/linkedin"><Button color="linkedin"><Icon name="linkedin"/> Log In with LinkedIn</Button></a>

        </div>
        <button className="circle"><h3>OR</h3></button>
    </div>

       

    );
};


export default Signup;

// <a href="/auth/facebook">
//                 <Button color='facebook'>
//                     <Icon name='facebook' /> Facebook
//                 </Button>
//             </a>


//             <a href="/auth/linkedin">
//                 <Button color='linkedin'>
//                     <Icon name='linkedin' /> Linkedin
//                 </Button>
//             </a>
//             <a href="/auth/twitter">
//                 <Button color='twitter'>
//                     <Icon name='twitter' /> Twitter
//                 </Button>
//             </a>
//             <a href="/auth/google">
//                 <Button color='google plus'>
//                     <Icon name='google plus' /> Google
//                 </Button>
//             </a>