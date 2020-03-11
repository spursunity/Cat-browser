import {
  all,
  takeLatest,
  put,
  call,
} from 'redux-saga/effects';

import { URLS } from '../constants';
import actionTypes from '../redux/actionTypes';

const { CATS_ACTION_TYPES } = actionTypes;

/**
 * Sagas for the CatsPage
 */

async function fetchAsyncData(url) {
  try {
    const responseJSON = await fetch(url, {
      mode: 'cors',
    });
    
    const response = await responseJSON.json();

    if (response.data) {
      return response.data;
    }
  
    return response;
  } catch (e) {
    throw new Error(`Fetching data error: ${e.message}`);
  }
};

/**
 * Fetching all cats data
 * For the CatsList component
 */
function* fetchCatsData() {
  try {
    const catsData = yield call(fetchAsyncData, URLS.ROUTES.CATS_LIST);
    yield put({ type: CATS_ACTION_TYPES.ADD_CATS_ASYNC, payload: catsData });
  } catch (e) {
    yield put({ type: CATS_ACTION_TYPES.ADD_CATS_ASYNC, payload: null });
  }
};

/**
 * Fetching a specific cat data
 * For a CatsPreview component
 */
function* addCatBio(action) {
  try {
    const { name, more } = action.payload;

    const catBio = yield call(fetchAsyncData, more);

    if (catBio) {
      catBio.name = name;
      catBio.image = `${URLS.BASE_PATH}${catBio.pic}`;
    }

    yield put({ type: CATS_ACTION_TYPES.ADD_BIO_ASYNC, payload: catBio });
  } catch (e) {
    yield put({ type: CATS_ACTION_TYPES.ADD_BIO_ASYNC, payload: null });
  }
};

export default function* catsSagas() {
  yield all([
    takeLatest(CATS_ACTION_TYPES.ADD_CATS, fetchCatsData),
    takeLatest(CATS_ACTION_TYPES.ADD_BIO, addCatBio),
  ]);
};
