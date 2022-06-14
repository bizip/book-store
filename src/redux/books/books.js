import { createSlice } from '@reduxjs/toolkit';

export const BookSlice = createSlice({
  name: 'book',
  initialState: {
    books: [],
  },
  reducers: {
    add: (state, action) => {
      state.books.push(action.payload);
    },
    remove: () => {
      console.log('a book is removed from the list');
    },
  },
});

export const { add, remove } = BookSlice.actions;
export default BookSlice.reducer;
