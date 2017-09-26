import { LOGIN_SUCCESSFUL, LOGOUT, GET_CURRENT_USER } from '../constants';

const currentUserReducer = (state = [], action) => {
  switch (action.type) {
    case LOGIN_SUCCESSFUL:
      return {
        ...state,
        token: action.payload
      };
    case LOGOUT:
      return {  };
    case GET_CURRENT_USER:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}

export default currentUserReducer;
