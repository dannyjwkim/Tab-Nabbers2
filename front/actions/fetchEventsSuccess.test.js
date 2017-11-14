import {fecthEventsSuccess} from './actions';
import {ADD_EVENT} from './types';

describe ('ADD EVENT', () => {
  
  it ('Returns the right object', () => {
    console.log(ADD_EVENT, fecthEventsSuccess);
    expect(fecthEventsSuccess("test").type).toEqual(ADD_EVENT);
    expect(fecthEventsSuccess("test").events).toEqual("test");
  });
});
