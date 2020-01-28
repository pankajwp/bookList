import {SELECTED_BOOK} from './index'

const selectedBook = (book) => {
  return {
    type: SELECTED_BOOK,
    payload: book
  }
}

export default selectedBook