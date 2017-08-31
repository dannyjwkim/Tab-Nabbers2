import React from "react";
import {connect} from "react-redux";

class Home extends React.Component{


    render(){
        return(
            <div>
                {this.props.children}
            </div>
    )
    }
}

function mapStateToProps(state) {
    return{

    }
}

export default connect(mapStateToProps)(Home);

