import { data } from '../../boooks-data/Data';
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
const bookReducer = (state = data, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, {
        id: action.payload.id,
        title: action.payload.author,
        category: action.payload.category,
      }];
    case REMOVE_BOOK:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export default bookReducer;
