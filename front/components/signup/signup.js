
import React from "react";
import { Button, Icon } from 'semantic-ui-react';
import "../../public/css/home.scss";

const Signup = () => {

    return (
        <div>
            <a href="/auth/facebook">
                <Button color='facebook'>
                    <Icon name='facebook' /> Facebook
                </Button>
            </a>


            <a href="/auth/linkedin">
                <Button color='linkedin'>
                    <Icon name='linkedin' /> Linkedin
                </Button>
            </a>
            <a href="/auth/twitter">
                <Button color='twitter'>
                    <Icon name='twitter' /> Twitter
                </Button>
            </a>
            <a href="/auth/google">
                <Button color='google plus'>
                    <Icon name='google plus' /> Google
                </Button>
            </a>

        </div>

    );
};


export default Signup;

