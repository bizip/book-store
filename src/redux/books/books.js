// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// action creator
export const addnewBookFunction = (data) => (dispatch) => dispatch({
  type: ADD_BOOK, payload: data,
});
export const removeBookFunction = (id) => (dispatch) => dispatch({
  type: REMOVE_BOOK, payload: id,
});

// reducer function
const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state, state.filter((book) => book.id !== action.payload.id)];
    default:
      return state;
  }
};

export default bookReducer;
