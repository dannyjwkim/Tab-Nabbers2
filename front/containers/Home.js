/**
 * Created by ea375w on 7/19/2017.
 */
import React from "react";
//
// import {connect} from "react-redux";
//
// import {bindActionCreators} from "redux";

// import * as courseActions from "../../action/courseAction";

class Home extends React.Component {


    render() {
        var test = 'I am happy to be here and practicing whatever you think I am practicing';

        console.log(test);

        // JSX go below
        return (
            <div>
                <h1>Hello World!!!</h1>

            </div>
        );
    }
}

// function mapStateToProps(state) {
//     return {
//         data: state
//     }
// }
//
//
// function matchDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(dispatch, courseActions)
//
//     }
// }

export default Home