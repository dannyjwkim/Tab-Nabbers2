/**
 * Created by ea375w on 7/19/2017.
 */
import React from "react";
import "../../public/css/profile.scss";

// Import pieces of components for Profile Pages
import About from "./pieces/About";
import Content from "./pieces/Content";
import fetch from "../../utils/api";



import {connect} from "react-redux";

class Profile extends React.Component {

    constructor(){
        super();

        this.state = {
            activeItem:'About'
        };

    }

    dataChanged = (data) => {
        console.log(data);

        this.setState({...data});
        console.log({...data});

        if(!data.activeItem){

            fetch.userUpdate({...data, userID: localStorage.getItem("userID")})
                .then(function(data) {
                    console.log(data);
                })
                .catch(function(err){
                    console.log(err);
                });
        }

    };

    // Do NOT touch this code
    getIn = (event) => {
        console.log(event.target);
        console.log(event.target);

    };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {

        console.log(this.props.overview);

        const [overview] = this.props.overview;

        var obj = {
            firstname:'Esterling',
            lastname:'Accime'
        };




        return (
            <section className="profile">

                <About {...overview} dataChanged = {this.dataChanged} getIn = {this.getIn} />

                <Content {...overview} dataChanged = {this.dataChanged} handleItemClick={this.handleItemClick}/>

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