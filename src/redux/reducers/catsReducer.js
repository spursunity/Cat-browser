import actionTypes from '../actionTypes';

const { CATS_ACTION_TYPES } = actionTypes;

/**
 * Reducer of the CatsPage
 */

const initialState = {
  catsData: null,
  chosenCat: null,
};

const catsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATS_ACTION_TYPES.ADD_CATS_ASYNC:
      return {
        ...state,
        catsData: action.payload,
      };

    case CATS_ACTION_TYPES.ADD_BIO_ASYNC:
      return {
        ...state,
        chosenCat: action.payload,
      };

    case CATS_ACTION_TYPES.DELETE_CAT:
      return {
        ...state,
        catsData: action.payload,
      };

    case CATS_ACTION_TYPES.RESTORE_CAT:
      return {
        ...state,
        catsData: action.payload,
      };
  
    default:
      return state;
  }
};

export default catsReducer;
