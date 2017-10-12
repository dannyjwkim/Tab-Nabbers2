import * as actions from './passwordMatchActions';

const {PASSWORD_CHANGE, PASSWORD_CHANGE_RETYPE, passwordChange, passwordChangeRetyping} = actions;

describe('Password Match Actions', () => {

  it ('Produces the right objects', () => {
    const randomPassword = '!%29f8asdk324lkjasdf';
    expect(passwordChange(randomPassword).type).toEqual(PASSWORD_CHANGE);
    expect(passwordChange(randomPassword).payload).toEqual(randomPassword);
    expect(passwordChangeRetyping(randomPassword).type).toEqual(PASSWORD_CHANGE_RETYPE);
    expect(passwordChangeRetyping(randomPassword).payload).toEqual(randomPassword);

  });
});