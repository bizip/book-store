// Actions
const ADDCATEGORY = 'addcategory';

// action creator
export const addNewCtegoryFunction = (data) => (dispatch) => {
  dispatch({ type: ADDCATEGORY, payload: data });
};
// reducer function
const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case ADDCATEGORY:
      return 'Under construction';
    default:
      return state;
  }
};

export default categoryReducer;
