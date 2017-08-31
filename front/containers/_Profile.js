/**
 * Created by ea375w on 7/19/2017.
 */
import React from "react";
import "../public/css/profile.scss";
import {connect} from "react-redux";

class Profile extends React.Component {

    constructor(){
        super();

    }

    render() {
        return (
            <section className="profile">

            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        overview: state.overview
    }
}
export default connect(mapStateToProps)(Profile);