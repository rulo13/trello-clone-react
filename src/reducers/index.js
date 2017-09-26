import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import boardsReducer from './boards';
import currentUser from './currentUser';

const mainReducer = combineReducers({
  boards: boardsReducer,
  currentUser,
  router: routerReducer
});

export default mainReducer;
