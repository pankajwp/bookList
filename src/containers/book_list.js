import React, {useState} from 'react';
import {connect} from 'react-redux';
import selectedBook from '../actions/action_selected_book';

function BookLists (props) {

  const [selectBook, setSelectBook] = useState('Select a Book')
  
  function listBooks () {
    //console.log (typeof props.activeBook);
    return props.books.map (book => (
      <li
        onClick={() => {
            props.selectedBook (book)
            setTitle()
          }          
        }
        className="list-group-item"
        key={book.title}
      >
        {book.title}
      </li>
    ));
  }

  function setTitle(){
    setSelectBook('Selected Book is')
  }

  return (
    <div className="row">
      <div className="col">
        <ul className="list-group">
          {listBooks ()}
        </ul>
      </div>
      <div className="col">
        {!props.activeBook ?(<h2>{selectBook}</h2>) : (<div><h2>{selectBook}</h2><h1>{props.activeBook}</h1></div>)}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    books: state.books,
    activeBook: state.activeBook
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectedBook: (clickedBook) => dispatch (selectedBook (clickedBook)),
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (BookLists);
