/**
 * Created by esterlingaccime on 7/13/17.
 */
import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as meetup from "../actions/meetupActions";
import {Meetup} from "../components/event/index";

class Event extends React.Component{

    componentDidMount(){
        this.props.actions.fetchEvents();

    }

    render(){
        //console.log(this.props.events);
        let events = this.props.events[0];
        console.log(events);

        return(
            <div className="event-container">
                <Meetup events = {events}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {events:state.events}

};


const mapDispatchToProps =  (dispatch) => {
    return{ actions: bindActionCreators(meetup, dispatch) }
};


export default connect(mapStateToProps, mapDispatchToProps)(Event);
