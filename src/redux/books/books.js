// Actions
const ADD = 'add';
const REMOVE = 'Remove';
const DISPLAY = 'display';

// action creator
export const addnewBookFunction = (data) => (dispatch) => dispatch({ type: ADD, payload: data });
export const removeBookFunction = (id) => (dispatch) => dispatch({ type: REMOVE, payload: id });
export const displayBookFunction = () => (dispatch) => dispatch({ type: DISPLAY });

// reducer function
const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return [...state, state.filter((book) => book.id !== action.payload.id)];
    case DISPLAY:
      return [action.payload];
    default:
      return state;
  }
};

export default bookReducer;
