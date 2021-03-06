import {
  FETCH_BOARD,
  FETCH_BOARD_FULFILLED,
  LOGIN,
  LOGIN_SUCCESSFUL,
  LOGOUT,
  GET_CURRENT_USER
} from '../constants';

export const fetchBoards = () => ({
  type: FETCH_BOARD
});
export const fetchBoardsFulfilled = payload => ({
  type: FETCH_BOARD_FULFILLED,
  payload
});
export const login = (user) => ({
  type: LOGIN,
  payload: {user}
});
export const getCurrentUser = payload => ({
  type: GET_CURRENT_USER,
  payload
})
export const loginSuccessful = payload => ({
  type: LOGIN_SUCCESSFUL,
  payload
});
export const logout = () => ({
  type: LOGOUT
})
