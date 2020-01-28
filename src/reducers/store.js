import {combineReducers, createStore} from 'redux';
import list from './reducer_book';
import ActiveBook from './reducer_book_desc';

// whatever our reducer will return will become our data for keys in the combineReducers, which then can be used in the componet or container(smart component)

const rootReducer = combineReducers ({
  books: list,
  activeBook: ActiveBook,
});

const store = createStore (rootReducer);

export default store;
