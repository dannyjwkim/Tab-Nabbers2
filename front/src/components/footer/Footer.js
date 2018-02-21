import React from 'react';
import "./footer.css";


const Footer = () => (
    <footer className="flex between">
        <div>
            <ul className="flex center">
                <a href="https://github.com/Tab-nabbers/Tab-Nabbers2"><li> Github</li></a> 
                <a href="#"><li> About</li></a> 
                <a href="#"><li> Link</li></a> 
            </ul>
        </div>


        <div>
            <ul className = "flex center">
                <a href="#"><li className = "fa fa-twitter"></li></a>                                 
                <a href="https://github.com/Tab-nabbers/Tab-Nabbers2"><li className = "fa fa-github"></li></a>
                <a href="#"><li className = "fa fa-facebook-official"></li></a>                   
                
            </ul>
        </div>
    </footer>
);

export default Footer;