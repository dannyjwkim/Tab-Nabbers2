/**
 * Created by Joseph Myalla on 09/24/17.
 */
import { PASSWORD_CHANGE,
         PASSWORD_CHANGE_RETYPE, } from "../actions/passwordMatchActions";

const initialState = {
    password:'',
    passwordretype:'',
};

export default (state=initialState,action)=> {
  switch (action.type) {
          case PASSWORD_CHANGE:

            return {
              ...state,
               password:action.payload
            }

          case PASSWORD_CHANGE_RETYPE:

            return {
              ...state,
              passwordretype:action.payload
            }

          default:
              return state;
      }
};
