import React from 'react';
import {Input, Button, Grid} from 'semantic-ui-react';
import SocialSidebar from '../common/SocialSidebar';
import '../../public/css/signin.scss';

const SignIn = () => {

    return(
        <div className="signin shadowBox">

            <Grid>
                <Grid.Row>
                    <Grid.Column width={8} className = 'signin--form-container'>
                        <form action="#" className="sideContainer layout-col">
                            <Input type="text" size = 'large' placeholder="Username"/>
                            <Input type="password" size = 'large' placeholder = "password"/>
                            <Button> Login </Button>
                        </form>
                    </Grid.Column>


                    <SocialSidebar/>
                </Grid.Row>
            </Grid>
        </div>
    );
};

export default SignIn;