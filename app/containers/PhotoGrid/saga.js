import { call, put, takeEvery } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_PHOTOS } from './constants';
import { photoLoaded, photoLoadingError } from './actions';

// Individual exports for testing
export function* getPhotoList() {
  const requestUrl = 'http://localhost:5001/';

  try {
    const data = yield call(request, requestUrl);
    yield put(photoLoaded(data));
  } catch (err) {
    yield put(photoLoadingError(err));
  }
  // See example in containers/HomePage/saga.js
}

export default function* defaultSaga() {
  yield [takeEvery(LOAD_PHOTOS, getPhotoList)];
}
