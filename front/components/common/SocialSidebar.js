
import React from 'react';
import {Grid, Button, Icon} from 'semantic-ui-react';

const SocialSidebar = () => {

    return(
        <Grid.Column width={8}>
            <div className="container rightContainer layout-col">
                <h5 className="rightHeading"><span className="up">Sign In with</span><br/>Social Network</h5>
                <a href="/auth/facebook"><Button color="facebook"><Icon name="facebook"/>Facebook</Button></a>
                <a href="/auth/twitter"><Button color="twitter"><Icon name="twitter"/>Twitter</Button></a>
                <a href="/auth/google"><Button color="google plus"><Icon name="google plus"/>Google+</Button></a>
                <a href="/auth/linkedin"><Button color="linkedin"><Icon name="linkedin"/>LinkedIn</Button></a>
            </div>

        </Grid.Column>
    );
};


export default SocialSidebar;