import React from 'react';
import { Route } from "react-router-dom";
// import { connect } from 'react-redux';
import {
  Events,
  Profile,
  Dashboard,
  Signin,
  Join,
  ResetPassword,
  NewPassword,
  Confirmation,
  Github,
  GoogleCalendar
} from "./containers";
import "./App.css";

// const mapStateToProps = (state) => {
//   return {

//   };
// }

const Routes = (props) => (
  <div className="main">
    <Route exact path="/" component={Signin} />
    <Route exact path="/join" component={Join} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/events" component={Events} />
    <Route exact path="/resetpassword" component={ResetPassword} />
    <Route exact path="/confirmation" component={Confirmation} />
    <Route exact path="/github/authorize" component={Github} />
    <Route exact path="/googlecalendar/authorize" component={GoogleCalendar} />
    <Route exact path="/secure/reset?code" component={NewPassword} />
  </div>
);
export default Routes;