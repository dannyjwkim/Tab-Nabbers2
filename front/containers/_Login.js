


import React from "react";
import {connect} from "react-redux";
import { bindActionCreators } from 'redux'
import "../public/css/signup.scss";
import {Signup} from "../components/signup/index.js";
import * as passwordMatchActions from "../actions/passwordMatchActions";

class StudentCredentials extends React.Component {

  handlePassword = (e) =>{
      e.preventDefault();
      this.props.actions.passwordChange(e.target.value);
  };

  handlePasswordReTyping=(e)=>{
      e.preventDefault();
      this.props.actions.passwordChangeRetyping(e.target.value);
  };

    render(){
      let passwordmatch = this.props.passwordmatch;
      let passworddonotmatch = false;

      if(passwordmatch.password!== "" && passwordmatch.passwordretype!== ""){
            if(passwordmatch.password!==passwordmatch.passwordretype){
              passworddonotmatch=true
            }
       }
        return(

            <div>
                <Signup onChangePassword={this.handlePassword}
                        onChangePasswordReTyping={this.handlePasswordReTyping}
                        passworddonotmatch={passworddonotmatch}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {
        passwordmatch: state.passwordmatch
    };

}

function mapDispatchToProps(dispatch) {
     return {
         actions:bindActionCreators(passwordMatchActions, dispatch)
     }
}

export default connect(mapStateToProps,mapDispatchToProps)(StudentCredentials);
