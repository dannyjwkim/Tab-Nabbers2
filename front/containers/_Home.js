import React from "react";
import "../public/css/home.scss";

class Home extends React.Component{
	render(){
		return(
				<div className="homepage-hero-module">

				    <div className="video-container">
				        <div className="filter"></div>
				        <a href="#"><h1 className="bootcruit"><span className="green">Boot</span><span className="blue">Cruit</span></h1></a>
				        <h1 className="text-center middle-text">Easiest way to get a Job</h1>
				        <div className="container">
						<button className="btn btn-outline-success">Student</button>
						<button className="btn btn-outline-primary">Employeer</button>
					</div>
				        <video autoPlay loop className="fillWidth">
				            <source src="videos/Clouds_Fly_By.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.

				            <source src="videos/Clouds_Fly_By.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
				        </video>

				        // <div className="poster hidden">
				        //     <img src="videos/Clouds_Fly_By.jpg" alt=""/>
				        // </div>
				    </div>
				</div>
		);
	};
};

export default Home;