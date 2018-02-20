
const initialState = {
    events: [],
    saved: [],
    pending: false
};


const eventbrites = (state = initialState, action) => {

    switch (action.type) {
        case "EVENTBRITE_SEARCH_FULFILLED":
            return {
                ...state,
                events: [...action.payload.data.events],
                pending: false
            };

        case "EVENTBRITE_SEARCH_PENDING":
            return {
                ...state,
                pending: true
            };

        case "EVENTBRITE_SEARCH_REJECTED":
            return {
                ...state,
                events: [...action.payload.data.events],
                pending: false
            };

        default:
            return state;
    }
};



export default eventbrites;