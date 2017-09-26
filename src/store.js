import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import mainReducer from './reducers';
import rootEpic from './epics';

export const history = createHistory();
const middleware = routerMiddleware(history);
const observableMiddleware = createEpicMiddleware(rootEpic);
const initalState = {
  boards: [],
  currentUser: {token: localStorage.getItem('token') || {}}
}

export const store = createStore(
  mainReducer,
  initalState,
  applyMiddleware(middleware, createLogger(), observableMiddleware)
);

