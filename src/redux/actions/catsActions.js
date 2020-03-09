import dateFormat from 'dateformat';

import actionTypes from '../actionTypes';

const { CATS_ACTION_TYPES } = actionTypes;

/**
 * Actions for the CatsPage
 */

export function addCats () {
  return {
    type: CATS_ACTION_TYPES.ADD_CATS,
  };
}

export function addBio(payload) {
  return {
    type: CATS_ACTION_TYPES.ADD_BIO,
    payload,
  };
}

export function deleteCat({ catId, catsData }) {
  const newCatsData = catsData.map((cat) => {
    if (catId === cat.id) {
      cat.deleted = true;
      cat.deletedAt = dateFormat();
    }

    return cat;
  });

  return {
    type: CATS_ACTION_TYPES.DELETE_CAT,
    payload: newCatsData,
  };
};

export function restoreCat({ catId, catsData }) {
  const newCatsData = catsData.map((cat) => {
    if (catId === cat.id) {
      cat.deleted = null;
      cat.deletedAt = null;
    }

    return cat;
  });

  return {
    type: CATS_ACTION_TYPES.RESTORE_CAT,
    payload: newCatsData,
  };
}
