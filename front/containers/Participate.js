import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';


class Participate extends React.Component{

    contents = () => {
        const {current_event} = this.props.params;
        const {events} = this.props.events;
        let obj = {};
        events.map((el) => {
            if(current_event === el.id){
                obj = el;
            }
        });
        return obj;
    };

    render(){

        const contents = this.contents();
        return(
            <div>
                <h2>{contents.group.name}</h2>
                <p>Title: {contents.name}</p>
                <p>Duration: {moment(contents.duration).format('hh')} hours</p>
                <p> Address: {contents.venue.address_1}</p>
                <p> City: {contents.venue.city}</p>
                <p> Zip: {contents.venue.zip ? contents.venue.zip : ''}</p>
                <p> State: {contents.venue.state}</p>
                <p>Region: {contents.group.region}</p>
                <p>Who: {contents.group.who}</p>
            </div>

        );
    }
}



const mapStateToProps = (state) => {
    return{
        events:state.events
    }
};


export default connect(mapStateToProps, null)(Participate);