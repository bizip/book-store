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
    remove: (state, action) => {
      const { bookList, id } = action.payload;
    },
  },
});

export const { add, remove } = BookSlice.actions;
export default BookSlice.reducer;
