import { ajax } from 'rxjs/observable/dom/ajax';
import { fetchBoardsFulfilled } from '../actions'
import { FETCH_BOARD } from '../constants';

const fetchBoardsEpic = action$ =>
  action$.ofType(FETCH_BOARD)
    .mergeMap(action =>
      ajax.getJSON(`http://127.0.0.1:3333/boards/`, {
          'Access-Control-Allow-Origin': '*'
        })
        .map(response => fetchBoardsFulfilled(response))
    );

export default fetchBoardsEpic;
