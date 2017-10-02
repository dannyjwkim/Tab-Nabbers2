// This component is page related
// We should not do any heavy HTML here
// All of HTML Mocks up, needs to go to components folder
// and be imported below into JSX
// This component is mainly to get data from Redux Store
// and pass it to the dumb components in the components folder
// Every functions related to that page, need to be built in here
// and pass via props as well to the presentation components in the components folders



import React from "react";
import {connect} from "react-redux";
import { bindActionCreators } from 'redux'
import "../public/css/signup.scss";
import {Signup} from "../components/signup/index.js";
import * as passwordMatchActions from "../actions/passwordMatchActions";

class StudentCredentials extends React.Component {

  handlePassword=(e)=>{
      e.preventDefault()
      this.props.actions.passwordChange(e.target.value);
  }

  handlePasswordReTyping=(e)=>{
      e.preventDefault()
      this.props.actions.passwordChangeRetyping(e.target.value);
  }

    render(){
      //console.log(this.props.passwordmatch);
      let passwordmatch = this.props.passwordmatch;
      let passworddonotmatch = false;
      if(passwordmatch.password!="" && passwordmatch.passwordretype!=""){
            if(passwordmatch.password!==passwordmatch.passwordretype){
              passworddonotmatch=true
            }
       }
        return(

            // JSX go here
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
    // here
    // Getting data from Redux here
    // and set pass it as props
    //console.log(state)
    return {passwordmatch: state.passwordmatch};

}

function mapDispatchToProps(dispatch) {
 return {actions:bindActionCreators(passwordMatchActions, dispatch)}
}

export default connect(mapStateToProps,mapDispatchToProps)(StudentCredentials);
