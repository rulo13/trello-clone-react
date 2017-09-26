import { ajax } from 'rxjs/observable/dom/ajax';
import { push } from 'react-router-redux';
import { loginSuccessful, getCurrentUser } from '../actions'
import { LOGIN, GET_CURRENT_USER } from '../constants';

const loginEpic = (action$, store) =>
  action$.ofType(LOGIN)
    .mergeMap(action =>
      ajax.post(`http://127.0.0.1:3333/login/`,action.payload.user, {
        'Access-Control-Allow-Origin': '*'
      })
        .toPromise()
        .then(res => {
          localStorage.setItem('token', res.response.token);
          return (loginSuccessful(res.response.token));
        })
      .catch(err => {
        console.log(err)
      })
    );


export default loginEpic;
