import {combineReducers, createStore} from 'redux';
import list from './reducer_book';
import bookDescReducer from './reducer_book_desc';

const rootReducer = combineReducers ({
  books: list,
  bookDesc: bookDescReducer,
});

const store = createStore (rootReducer);

export default store;
