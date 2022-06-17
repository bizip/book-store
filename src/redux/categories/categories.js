// Actions
const ADD_CATEGORY = 'bookstore/category/ADD_CATEGORY';

// action creator
export const addNewCtegoryFunction = () => (dispatch) => {
  dispatch({ type: ADD_CATEGORY });
};
// reducer function
const categoryReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        text: 'Under construction',
      };
    default:
      return state;
  }
};

export default categoryReducer;
