import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Video from "../components/video";


class Home extends React.Component{

    constructor(){
        super();

    }

    render(){
        return(
            <div>

                <Navbar/>


                <Video/>


                <Footer/>

            </div>
    )
    }
}


export default Home;
