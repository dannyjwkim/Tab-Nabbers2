import axios from "axios";

export const eventBriteSearch = (name) => {
    return {
        type: "EVENTBRITE_SEARCH",
        payload: axios.get("/secure/eventbrite/search?name=" + name )
    };
};