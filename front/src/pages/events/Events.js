import React, { Component } from 'react';
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
    getValues
} from "../../actions";




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

const Allevents = (props) => (true ? <DisplayEvents {...props} /> : "");

const Saved = (props) => (true ? (<div className="flex wrap center"> No Saved Events</div>) : '');



const DisplayEvents = (props) => {
    const pendingClass = props.eventbrites.pending ? " ui loading form" : "";

    return (
        <div className={"flex wrap center "}>
            {(props.eventbrites.events || []).map((event, index) => (
                <div className={"week search " + pendingClass} key={index}>
                    <img src={event.logo ? event.logo.url : ''} alt="" />
                    <h4>Name: {event.name.text}</h4>
                    <p>Time: {event.start.local}</p>
                    {
                        // Feature
                        // Add to calendar
                        // Share on Social Media
                    }
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
        if (this.props.eventbrites.events.length === 0)
            this.props.eventBriteSearch("javascript");
    };

    change_view = (view, event) => {
        const lower_view = view.toLowerCase();
        this.setState({ view, current_button: { [lower_view]: "current" } })
    };


    getSearchInput = ({
        target: {
            name,
        value
        }
    }) => this.props.getValues({ [name]: value });

    onSubmit = (event) => {
        event.preventDefault();
        const value = this.props.user.search;
        this.props.eventBriteSearch(value);
        this.props.getValues({ search: "" }); // resetting the value
    };


    render() {
        return (
            <div>
                <Header />
                <Content
                    change_view={this.change_view}
                    getSearchInput={this.getSearchInput}
                    onSubmit={this.onSubmit}
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
        eventBriteSearch: (name) => dispatch(eventBriteSearch(name)),
        getValues: (data) => dispatch(getValues(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);

