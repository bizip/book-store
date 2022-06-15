import { createSlice } from '@reduxjs/toolkit';

// Actions
const ADD = 'add';
const REMOVE = 'Remove';
const DISPLAY = 'display';

// action creator
export const addnewBookFunction = (data) => (dispatch) => dispatch({ type: ADD, payload: data });

// reducer function
const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default bookReducer;
