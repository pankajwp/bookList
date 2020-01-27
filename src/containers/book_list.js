import React from 'react';
import {connect} from 'react-redux';
import bookDescClick from '../actions/action_book_desc';

function BookLists (props) {
  function listBooks () {
    console.log (typeof props.books);
    return props.books.map (book => (
      <li
        onClick={() => props.bookDescClick (book)}
        className="list-group-item"
        key={book.title}
      >
        {book.title}
      </li>
    ));
  }

  return (
    <div className="row">
      <div className="col">
        <ul className="list-group">
          {listBooks ()}
        </ul>
      </div>
      <div className="col">
        <h2>Content</h2>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    books: state.books,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    bookDescClick: () => dispatch (bookDescClick ()),
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (BookLists);
