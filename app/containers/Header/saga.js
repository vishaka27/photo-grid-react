import { takeEvery, call, put } from 'redux-saga/effects';
import request from 'utils/request';

import { headerLoaded, headerLoadingFailed } from './actions';

import { LOAD_HEADER } from './constants';

export function* getHeader() {
  const requestUrl = 'http://localhost:5001/header';

  try {
    const data = yield call(request, requestUrl);
    yield put(headerLoaded(data));
  } catch (err) {
    yield put(headerLoadingFailed(err));
  }
}
// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield [takeEvery(LOAD_HEADER, getHeader)];
}
