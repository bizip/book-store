import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const allReducer = combineReducers({
  bookReducer,
});
const store = configureStore({
  reducer: allReducer, categoryReducer,
});
export default store;
