import { configureStore } from '@reduxjs/toolkit';
import BookSliceReducer from './books/books';

const store = configureStore({
  reducer: {
    reducer: BookSliceReducer,
  },
});
export default store;
