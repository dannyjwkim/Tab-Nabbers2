import React from 'react';
import {Link} from "react-router-dom";
import "./footer.css";


const Footer = () => (
    <footer className="flex between">
        <div>
            <ul className="flex center">
                <a href="https://github.com/Tab-nabbers/Tab-Nabbers2" target='_blank' rel="noopener noreferrer"><li> Github</li></a>
                <Link to = "/about"><li>About</li></Link> 
                <Link to = "/link"><li>Link</li></Link>                 
            </ul>
        </div>


        <div>
            <ul className = "flex center">
                <a href="" target='_blank' rel="noopener noreferrer"><li className = "fa fa-twitter"></li></a>                                 
                <a href="https://github.com/Tab-nabbers/Tab-Nabbers2" target='_blank' rel="noopener noreferrer"><li className = "fa fa-github"></li></a>
                <a href="" target='_blank' rel="noopener noreferrer"><li className = "fa fa-facebook-official"></li></a>                   
                
            </ul>
        </div>
    </footer>
);

export default Footer;