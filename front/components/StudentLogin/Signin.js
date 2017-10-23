import React from 'react';
import {Input, Button, Grid} from 'semantic-ui-react';
import SocialSidebar from '../common/SocialSidebar';
import '../../public/css/signin.scss';

const SignIn = ({existedUser, authenticate}) => {

    return(
        <div className="signin shadowBox">

            <Grid>
                <Grid.Row>
                    <Grid.Column width={8} className = 'signin--form-container'>
                        <form  className="sideContainer layout-col">
                            <Input type="email" size = 'large' placeholder="Username" name="email" onChange={authenticate}/>
                            <Input type="password" size = 'large' placeholder = "password" name="password" onChange={authenticate}/>
                            <Button onClick={existedUser}> Login </Button>
                        </form>
                    </Grid.Column>


                    <SocialSidebar/>
                </Grid.Row>
            </Grid>
        </div>
    );
};

export default SignIn;