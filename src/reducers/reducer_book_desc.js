import {SELECTED_BOOK} from '../actions';

function bookDescReducer (state = null, action) {
  switch (action.type) {
    case SELECTED_BOOK:
      //console.log(action.payload.)
      return action.payload.description

    default:
      return state;
  }
}

export default bookDescReducer;
