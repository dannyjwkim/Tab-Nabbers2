/**
 * Created by esterlingaccime on 8/11/17.
 */
import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class $NAME extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <h1>Hello World!!</h1>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        data:state.books
    }
}

function matchDispatchToProps(dispatch) {

    return bindActionCreators({
        test: test, sad: sad
    }, dispatch);

}

export default connect(mapStateToProps, matchDispatchToProps)($NAME);