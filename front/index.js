
import "./public/css/_global.scss";
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes/routes";
import thunk from "redux-thunk";
import {createStore, applyMiddleware, compose} from "redux";
import reducers from "./reducers/index";
import Utils from './utils/utils';


let utils = new Utils();

const enhancers = compose(applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(reducers, enhancers);

utils.setAuthorizationToken(localStorage.token);

ReactDOM.render(<Routes store={store} />,

    document.getElementById("app"));

if(module.hot){
    module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer)
    });
}



