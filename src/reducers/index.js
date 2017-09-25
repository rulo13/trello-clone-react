import { combineReducers } from 'redux';
import boardsReducer from './boards';

const mainReducer = combineReducers({
  boards: boardsReducer
});

export default mainReducer;
