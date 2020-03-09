import { all, fork } from 'redux-saga/effects';

import catsSagas from './catsSaga';

export default function* sagas() {
  yield all([fork(catsSagas)]);
};