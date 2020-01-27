import {BOOK_DESC} from '../actions';

function bookDescReducer (state = null, action) {
  switch (action.type) {
    case BOOK_DESC:
      return action.payload;

    default:
      return state;
  }
}

export default bookDescReducer;
