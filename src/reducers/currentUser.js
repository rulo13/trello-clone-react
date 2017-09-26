import { LOGIN_SUCCESSFUL, LOGOUT } from '../constants';

const currentUserReducer = (state = [], action) => {
  switch (action.type) {
    case LOGIN_SUCCESSFUL:
      return action.payload;
    case LOGOUT:
      return {  };
    default:
      return state;
  }
}

export default currentUserReducer;
