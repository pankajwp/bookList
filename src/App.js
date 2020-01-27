import React from 'react';
import BookLists from './containers/book_list';
import {Provider} from 'react-redux';
import store from './reducers/store';
import './App.css';

function App () {
  return (
    <div className="container">
      <Provider store={store}>
        <BookLists />
      </Provider>
    </div>
  );
}

export default App;
