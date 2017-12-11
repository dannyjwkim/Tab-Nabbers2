import React from "react";
import {connect} from "react-redux";
import {browserHistory} from 'react-router';
import {fetchEvents, fetchGroups} from '../actions/actions';
import {Modal, Icon} from 'semantic-ui-react';
import "../public/css/event.scss";
import moment from 'moment';
import WOW from 'wowjs';
import axios from 'axios';
import {fetchUserProfile} from '../actions/actions';


class Event extends React.Component {

    constructor() {
        super();

        this.state = {
            isOpen: false,
            id: '',
            group_details: []
        };
    }

    componentWillMount() {
        this.props.dispatch(fetchEvents());
        this.props.dispatch(fetchUserProfile());

    }

    componentDidMount() {
        new WOW.WOW().init();

    }

    group_details = [];


    groupDetails = (events) => {

        events.map((el, key) => {
            axios({
                url: '/group/' + el.group.urlname,
                method: "GET"
            }).then((group) => {
                this.group_details.push(group.data);
            });

        });


    };


    /**
     * Adding info into the Modal base on what they click on
     * @param id
     * @returns {{}}
     */
    contents = (id, name) => {
        const url = '/events/participate/' + id + '/' + name.replace(/\s/g, '').toLowerCase();
        browserHistory.replace(url);
    };

    render() {
        const {events} = this.props.events;
        this.groupDetails(events);

        console.log("Group Details: ", this.group_details);


        return (
            <div>
                <section className="events-container">
                    {
                        events.map(({group, time, yes_rsvp_count, id}) => (
                            <div className="events-container__event wow slideInRight" id={id} key={id}>


                                <div className="events-container__event--content"
                                     onClick={() => this.contents(id, group.name)}>
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
                                    <p>{moment(time).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
                                    <Icon name='add'/>
                                </div>


                            </div>
                        ))
                    }

                </section>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {events: state.events};
};


export default connect(mapStateToProps)(Event);




