// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SUBMIT_USER_EMAIL, actSubmitUserEmail } from '../actions';
import { INITIAL_STATE } from '.';

const user = (state = INITIAL_STATE.user, action) => {
  switch (action.type) {
    case SUBMIT_USER_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

export default user;
