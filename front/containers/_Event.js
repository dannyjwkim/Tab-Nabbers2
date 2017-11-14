import React from "react";
import {connect} from "react-redux";
import axios from 'axios';
import {Meetup} from "../components/event/index";
import {fetchEvents} from '../actions/actions';


class Event extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchEvents());
    }

    render() {
        return (
            <div>
                <p>Hello World!!!</p>
                <Meetup events = {this.props.events}/>
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return { events:state.events }
};


export default connect(mapStateToProps)(Event);

