import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs';
import { loginSuccessful } from '../actions'
import { LOGIN } from '../constants';

const fetchBoardsEpic = (action$, store) =>{
  action$.ofType(LOGIN)
    .mergeMap(action =>
      ajax.post(`http://127.0.0.1:3333/login/`,action.payload.user, {
        'Access-Control-Allow-Origin': '*'
      })
      .map(response => loginSuccessful(response))
      // .toPromise()
      // .then(response => {
      //   console.log(store.getState())
      //   //action.payload.routerHistory.push('/home');
      //   return Observable.from(loginSuccessful(response));
      // })
      // .catch(err => {
      //   console.log(err)
      // })
    );
}

export default fetchBoardsEpic;
