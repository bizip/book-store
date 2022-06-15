// Actions
const ADD_CATEGORY = 'bookstore/category/ADD_CATEGORY';

// action creator
export const addNewCtegoryFunction = (data) => (dispatch) => {
  dispatch({ type: ADD_CATEGORY, payload: data });
};
// reducer function
const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return 'Under construction';
    default:
      return state;
  }
};

export default categoryReducer;
