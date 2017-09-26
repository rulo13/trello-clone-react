import { ajax } from 'rxjs/observable/dom/ajax';
import { push } from 'react-router-redux';
import { loginSuccessful, getCurrentUser } from '../actions'
import { LOGIN, LOGIN_SUCCESSFUL } from '../constants';

export const loginEpic = (action$, store) =>
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

export const getCurrentUserEpic = (action$, store) =>
    action$.ofType(LOGIN_SUCCESSFUL)
      .mergeMap(action =>
        ajax.getJSON(`http://127.0.0.1:3333/currentUser`,{
          'Authorization': `Bearer ${store.getState().currentUser.token}`
        })
          .toPromise()
          .then(res => {
            store.dispatch(push('/home'))
            return getCurrentUser(res);
          })
      )
