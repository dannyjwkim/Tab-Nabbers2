import React from 'react';
import { Grid, Icon, Input, Button } from 'semantic-ui-react';
import '../../public/css/navbar.scss';


const Navbar = () => {

    return (
        <Grid celled='internally' className="navbar-profile">
            <Grid.Row>
                <Grid.Column width={3}>
                    <h4>Bootcruit</h4>
                </Grid.Column>

                <Grid.Column width={10}>
                    <Input placeholder = "Search events..."/>
                    <Button> Find Events</Button>
                </Grid.Column>

                <Grid.Column width={3}>
                    <Icon name= 'user circle' size='big'/>
                </Grid.Column>
            </Grid.Row>


        </Grid>
    );
};

export default Navbar;