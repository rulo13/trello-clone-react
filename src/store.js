import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import mainReducer from './reducers';

export const history = createHistory();
const middleware = routerMiddleware(history);

export const store = createStore(
  mainReducer,
  {},
  applyMiddleware(middleware(), createLogger())
);

