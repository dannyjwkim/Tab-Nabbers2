
import {
    PASSWORD_CHANGE,
    PASSWORD_CHANGE_RETYPE,
    SIGN_USER
} from './actionTypes';

export const passwordChange = (password) =>({
  type: PASSWORD_CHANGE,
  payload:password
});

export const passwordChangeRetyping = (passwordretype) =>({
  type: PASSWORD_CHANGE_RETYPE,
  payload: passwordretype
});


export const signNewUser = (user) => ({
    type:SIGN_USER,
    user
});