/**
 * Created by Joseph Myalla on 09/24/17.
 */

export const PASSWORD_CHANGE = 'PASSWORD_CHANGE';
export const PASSWORD_CHANGE_RETYPE = 'PASSWORD_CHANGE_RETYPE';

export const passwordChange = (password) =>({
  type: PASSWORD_CHANGE,
  payload:password
});

export const passwordChangeRetyping = (passwordretype) =>({
  type: PASSWORD_CHANGE_RETYPE,
  payload: passwordretype
});
