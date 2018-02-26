import React, { Component } from 'react';
import moment from "moment";
import {
    connect
} from 'react-redux';

import {
    Header,
    Footer
} from "../../components";
import "./event.css";

import {
    eventBriteSearch,
    getValues,
    getLocation,
    savedEvent,
    getSavedEvents
} from "./actions";




const Search = (props) => {
    const {
        onSubmit,
        user: {
            search
        },
        getSearchInput
    } = props;

    return (
        <div>
            <div className="search flex center ">
                <form className="flex main-center ui form column" onSubmit={onSubmit}>
                    <div className="field" >
                        <input
                            type="text"
                            placeholder="Search events..."
                            name="search"
                            required
                            value={search}
                            onChange={getSearchInput} />
                    </div>
                    <button className="btn" >Search</button>
                </form>
            </div>

            {true ? <DisplayEvents {...props} /> : ""}
        </div>
    );
};


const Week = (props) => (true ? (<div className="flex wrap center"> No next Week Events</div>) : "");

const Allevents = (props) => (true ? <DisplayEvents {...props} status="allevents" /> : "");

const Saved = (props) => (true ? <DisplayEvents {...props} status="saved" /> : "");



const DisplayEvents = (props) => {
    const pendingClass = props.eventbrites.pending ? " ui loading form" : "";

    let events = props.status === "saved" ? props.eventbrites.saved : props.eventbrites.events;

    try {
        events = events.map((el, index) => {
            if (props.eventbrites.ids.includes(el.id)) {
                el["saved"] = "saved";
                return el;
            } else {
                el["saved"] = "";
                return el;
            }
        });
    } catch (error) {

    }

    return (
        <div className={"flex wrap center " + pendingClass}>
            {(events || []).map((event, index) => (
                <div className={"week search " + pendingClass} key={index}>
                    <img src={event.logo ? event.logo.url : ''} alt="" />
                    <h4>{event.name.text}</h4>
                    <p>{moment(event.start.local).format("llll")}</p>

                    <div className="icons">
                        <i className="share alternate icon"></i>
                        <i className="calendar alternate icon"></i>
                        <i className={"heart outline icon " + event.saved} onClick={() => props.saved(event)}></i>
                    </div>

                    <div className="info">
                        <p>Description: {event.description.text}</p>
                    </div>

                </div>
            ))}
        </div>
    );
};



class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'Search',
            current_button: {
                search: "current"
            }
        };
    }

    componentWillMount = () => {
        this.props.getSavedEvents()
            .then(() => {
                this.props.getLocation()
                    .then((response) => {
                        if (this.props.eventbrites.events.length === 0)
                            this.fetchEventLocation(response.value.data, "tech");
                    })
                    .catch((err) => console.log("Error: ", err));
            });



    };

    change_view = (view, event) => {
        const lower_view = view.toLowerCase();
        this.setState({ view, current_button: { [lower_view]: "current" } })
    };

    /**
     * Get current user locations
     * @param data
     * @param value
     */
    fetchEventLocation = (data, value) => {
        const {
            longitude,
            latitude
            } = data;

        const coordinations = { longitude, latitude };
        this.props.eventBriteSearch(value, coordinations);
    };


    getSearchInput = ({
        target: {
            name,
        value
        }
    }) => this.props.getValues({ [name]: value });

    onSubmit = (event) => {
        const {
            search,
            location
        } = this.props.user;
        event.preventDefault();
        this.fetchEventLocation(location, search);
        this.props.getValues({ search: "" }); // resetting the value
    };

    saved = (obj) => {
        console.log("Checking");
        this.props.savedEvent(obj.id)
            .then((data) => {
                this.props.getSavedEvents();  // # Bad for Perfomance   
            });

    };


    render() {
        return (
            <div>
                <Header />
                <Content
                    change_view={this.change_view}
                    getSearchInput={this.getSearchInput}
                    onSubmit={this.onSubmit}
                    saved={this.saved}
                    {...this.state} {...this.props} />
                <Footer />
            </div>
        );
    }
}



const switch_component = {
    Allevents,
    Search,
    Week,
    Saved
};

const Content = (props) => {
    const { view } = props;
    return (
        <div className="content search_events flex between">
            <Sidebar {...props} />
            {switch_component[view](props)}
        </div>
    );
};



const Sidebar = (props) => {
    const {
        current_button,
        change_view
    } = props;

    return (
        <div >
            <ul className="sidebar">
                <li onClick={(event) => change_view("Search", event)} className={current_button["search"]}>Search</li>
                <li onClick={(event) => change_view("Allevents", event)} className={current_button["allevents"]}>Events</li>
                <li onClick={(event) => change_view("Saved", event)} className={current_button["saved"]}>Saved</li>
                <li onClick={(event) => change_view("Week", event)} className={current_button["week"]}>Next week</li>
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        eventbrites: state.eventbrites,
        user: state.user
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        eventBriteSearch: (name, obj) => dispatch(eventBriteSearch(name, obj)),
        getValues: (data) => dispatch(getValues(data)),
        getLocation: () => dispatch(getLocation()),
        savedEvent: (id) => dispatch(savedEvent(id)),
        getSavedEvents: () => dispatch(getSavedEvents())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);

