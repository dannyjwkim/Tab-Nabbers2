import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Video from "../components/video";
import { browserHistory } from 'react-router';


class Home extends React.Component{

    constructor(){
        super();

    }

    render(){
        return(
            <div>
                {this.props.children}
            </div>
    )
    }
}


export default Home;

