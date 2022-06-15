import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookReducer from './books/books';

const allReducer = combineReducers({
  bookReducer,
});
const store = configureStore({
  reducer: allReducer,
});
export default store;
