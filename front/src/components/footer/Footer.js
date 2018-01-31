import React from 'react';
import "./footer.css";


const Footer = () => (
    <footer className="flex between">
        <div>
            <ul className="flex center">
                <li>Github</li>
                <li>About</li>
                <li>Link</li>
            </ul>
        </div>


        <div>
            <ul className = "flex center">
                <li className = "fa fa-twitter"></li>
                <li className = "fa fa-github"></li>
                <li className = "fa fa-facebook-official"></li>
            </ul>
        </div>
    </footer>
);

export default Footer;