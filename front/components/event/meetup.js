import React from "react";
import { Grid, Segment } from 'semantic-ui-react';
import "../../public/css/event.scss";

const Meetup = ({events}) => {

    return(

        <Grid divided='vertically'>
            <p>I am the Event Page</p>
            <Grid.Row columns={3} >
                { events ? Object.keys(events).map((el, i) => (
                    <Grid.Column key={i}>
                        <Segment piled className={"events"}>
                            <h4>{events[el].name}</h4>
                            <p>{events[el].description}</p>
                        </Segment>
                    </Grid.Column>

                )) : <p>Loading...</p>}
            </Grid.Row>
        </Grid>

    );
};


export default Meetup;