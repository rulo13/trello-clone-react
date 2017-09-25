import { ADD_BOARD } from '../constants';

const boardsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOARD:
      if (Array.isArray(action.payload)) {
        return [
          ...state,
          ...action.payload
        ];
      }
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
}

export default boardsReducer;
