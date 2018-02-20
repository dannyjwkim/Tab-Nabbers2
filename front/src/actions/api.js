import axios from "axios";

export const eventBriteSearch = (name, {
    longitude, 
    latitude
}) => {
    const endpoint = "/secure/eventbrite/search?";
    const params = `q=${name}&latitude=${latitude}&longitude=${longitude}`;

    console.log("Actions latitude: ", latitude);
    console.log("Actions longitude: ", latitude);

    return {
        type: "EVENTBRITE_SEARCH",
        payload: axios.get(endpoint + params)
    };
};


export const getLocation = () => {
    return {
        type: "GET_LOCATION",
        payload: axios.get("http://freegeoip.net/json/")
    };
};