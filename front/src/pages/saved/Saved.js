import React, { Component } from 'react';
// import { connect } from 'react-redux';
import moment from "moment";
import {
    Header,
    Footer,
    Loader
} from "../../components";
import "./saved.css";
import data from "./events.json";

// const mapStateToProps = (state) => {
//     return {

//     };
// }

class Saved extends Component {
    render() {
        console.log("Data: ", data);
        return (
            <div>
                <Header />
                <Loader />
                <Content>
                    {
                        data.events.map((el, index) => (
                            <div className="saved_events" key = {index}>
                                <p> <strong>Name </strong>: {el.name.text}</p>
                                <p> <strong>Time </strong>: {moment(el.start.local).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
                                <p> <strong>Timezone </strong>: {el.start.timezone}</p>
                            </div>
                        ))
                    }
                </Content>
                <Footer />
            </div>
        );
    }
}

const Content = (props) => {
    return (
        <div className="content flex between wrap">
            {props.children}

        </div>
    );
};

export default Saved;