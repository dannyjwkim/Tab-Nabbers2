import axios from "axios";


/**
 * Pull Events from Event Brite API
 * Based on User current location
 * @param {*} name 
 * @param {*} obj 
 * @method eventBriteSearch 
 */
export const eventBriteSearch = (name, {
    longitude, 
    latitude
}) => {
    const endpoint = "/secure/eventbrite/search?";
    const params = `q=${name}&latitude=${latitude}&longitude=${longitude}`;

    return {
        type: "EVENTBRITE_SEARCH",
        payload: axios.get(endpoint + params)
    };
};

/**
 * Get values
 * @param {*} data 
 */
export const getValues = (data) => {
    return{
        type:"GET_VALUE",
        data
    };
};



/**
 * Get User current location
 */
export const getLocation = () => {
    return {
        type: "GET_LOCATION",
        payload: axios.get("http://freegeoip.net/json/")
    };
};




