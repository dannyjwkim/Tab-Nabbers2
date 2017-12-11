import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";
import {Provider} from "react-redux";
import Home from "../containers/_Home";
import PropTypes from 'prop-types';
import Profile from "../containers/_Profile";
import Participate from "../containers/Participate";
import EnsureLoggedIn from '../containers/EnsureLoggedIn';



const Routes = ({store}) => (

    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Home} />
            <Route component={EnsureLoggedIn}>
                <Route path = '/profile/:content' components={Profile}/>
                <Route path = '/events/participate/:current_event/:name' components={Participate}/>
            </Route>

        </Router>
    </Provider>
);


Routes.propTypes = {
    store: PropTypes.object.isRequired
};

export default Routes;
