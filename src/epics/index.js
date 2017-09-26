import { combineEpics } from 'redux-observable';
import boards from './boardEpics';
import user from './userEpic';

const rootEpic = combineEpics(boards, user);

export default rootEpic;
