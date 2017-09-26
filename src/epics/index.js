import { combineEpics } from 'redux-observable';
import boards from './boardEpics';
import { getCurrentUserEpic, loginEpic } from './userEpic';

const rootEpic = combineEpics(boards, getCurrentUserEpic, loginEpic);

export default rootEpic;
