import {fecthEventsSuccess} from './meetupActions';
import {ADD_EVENT} from './actionTypes';

describe ('ADD EVENT', () => {
  
  it ('Returns the right object', () => {
    console.log(ADD_EVENT, fecthEventsSuccess);
    expect(fecthEventsSuccess("test").type).toEqual(ADD_EVENT);
    expect(fecthEventsSuccess("test").events).toEqual("test");
  });
});
