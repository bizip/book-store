import axios from 'axios';
import { data } from '../../boooks-data/Data';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/juRlPBqKi1o6i8tmwxbv/books';
// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const DISPLAY_BOOK = 'bookstore/books/DISPLAY_BOOK';

// action creator
export const displayBookFunction = () => async (dispatch) => {
  try {
    const response = await axios.get(url);
    return dispatch({ type: DISPLAY_BOOK, payload: response.data });
  } catch (err) {
    return err;
  }
};

export const addnewBookFunction = (data) => async (dispatch) => {
  try {
    await axios.post(url, data);
    return dispatch({ type: ADD_BOOK, payload: data });
  } catch (err) {
    return err;
  }
};
export const removeBookFunction = (id) => async (dispatch) => {
  const deleteUrl = `${url}/${id}`;
  try {
    await axios({
      method: 'delete',
      url: deleteUrl,
      data: JSON.stringify({ item_id: id }),
    });
    return dispatch({ type: REMOVE_BOOK, id });
  } catch (err) {
    return err;
  }
};

// reducer function
const bookReducer = (state = data, action) => {
  switch (action.type) {
    case DISPLAY_BOOK:
      return Object.keys(action.payload)
        .map((el) => ({ ...action.payload[el][0], id: el }));
    case ADD_BOOK:
      return [...state, {
        id: action.payload.item_id,
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
      }];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default bookReducer;
