import React from "react";
import {connect} from "react-redux";
import {fetchEvents} from '../actions/actions';
import { Modal, Icon} from 'semantic-ui-react';
import "../public/css/event.scss";
import moment from 'moment';
import WOW from 'wowjs';

class Event extends React.Component {

    constructor(){
        super();

        this.state = {
            isOpen:false,
            id:''
        }
    }

    componentWillMount(){

    }

    componentDidMount() {
        new WOW.WOW().init();
        this.props.dispatch(fetchEvents());
    }

    /**
     * Open Modal with Details about the Events
     * @param id
     */
    openDetails = (id) => {
        this.setState({ isOpen: true, id });
    };

    /**
     * Closing Modals
     */
    closeDetails = () => {
        this.setState({ isOpen: false });
    };

    /**
     * Adding info into the Modal base on what they click on
     * @param id
     * @returns {{}}
     */
    contents = (id) => {
        const {events} = this.props.events;
        let obj = {};
        events.map((el) => {
            if(id === el.id){
                obj = el;
            }
        });
        return obj;
    };

    render() {
        const events = this.props.events;
        const contents = this.contents(this.state.id || 'hftknlywqbjb');

        return (
            <div>
                 <section className="events-container">
                    {
                        Object.keys(events).map((el, i) => {
                            return events[el].map(({group, time, yes_rsvp_count, id}) => (
                                <div className="events-container__event wow slideInRight"   id={id} key={id}  >

                                    <Modal
                                        open={this.state.isOpen}
                                        onClose={this.closeDetails}
                                        size="small"
                                        dimmer={true}
                                    >

                                        <Modal.Content >
                                            <h2>Group Name: {contents.group.name}</h2>
                                            <p>Title: {contents.name}</p>
                                            <p>Duration: {moment(contents.duration).format('hh')} hours</p>
                                            <p> Address: {contents.venue.address_1}</p>
                                            <p> City: {contents.venue.city}</p>
                                            <p> Zip: {contents.venue.zip ? contents.venue.zip : ''}</p>
                                            <p> State: {contents.venue.state}</p>
                                            <p>Region: {contents.group.region}</p>
                                            <p>Who: {contents.group.who}</p>
                                        </Modal.Content>
                                    </Modal>

                                    <div className="events-container__event--content" onClick={() => this.openDetails(id)}>
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
                            ));
                        })
                    }

                </section>
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return { events:state.events }
};


export default connect(mapStateToProps)(Event);

