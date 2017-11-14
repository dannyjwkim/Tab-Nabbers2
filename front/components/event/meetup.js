import React from "react";
import {Grid, Segment} from 'semantic-ui-react';
import "../../public/css/event.scss";

const Meetup = ({events}) => {

    return (
        <section className="events-container">
            {
                Object.keys(events).map((el, i) => {
                    return events[el].map(({group, time, yes_rsvp_count, id}) => (
                        <div className="events-container__event" key={id}>
                            <div className="events-container__event--content">
                                <i>Icons here</i>
                                <div>
                                    <h2>{group.name} </h2>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab debitis
                                        dignissimos dolor dolores doloribus eos eum
                                     </p>
                                </div>
                            </div>

                            <div className="events-container__event--members">
                                <p>{yes_rsvp_count} going</p>
                                <p>{time}</p>
                            </div>
                        </div>
                    ));
                })
            }

        </section>

    );
};


export default Meetup;
