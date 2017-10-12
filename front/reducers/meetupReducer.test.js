import meetupReducer from './meetupReducers';

import {ADD_EVENT} from './../actions/actionTypes';

import {fecthEventsSuccess} from './../actions/meetupActions';

describe('Meetup reducer', () => {

  it ('Returns an empty array when passed in an action with an unrecognized type', () => {

    expect(meetupReducer(undefined, {type:'somethingrandom'})).toEqual({events:[]});
  });

  it ('Returns an object containing the action passed in when it is ADD_EVENT', () => {
    
    expect(meetupReducer(undefined, {type:ADD_EVENT, events: {Testing:"Testing"}})).toEqual(
      {events: [{Testing:"Testing"}]});
  });
});

