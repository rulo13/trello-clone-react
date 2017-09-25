import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import boardsReducer from './boards';

const mainReducer = combineReducers({
  boards: boardsReducer,
  router: routerReducer
});

export default mainReducer;
