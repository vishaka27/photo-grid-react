/*
 *
 * PhotoGrid reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LOAD_PHOTOS,
  LOAD_PHOTO_SUCCESS,
  LOAD_PHOTO_ERROR,
} from './constants';

export const initialState = fromJS({
  allPhotos: [],
  isLoading: false,
  hasError: false,
});

function photoGridReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOAD_PHOTOS:
      return state.set('isLoading', true).set('hasError', false);
    case LOAD_PHOTO_SUCCESS:
      return state
        .set('allPhotos', action.photos)
        .set('isLoading', false)
        .set('hasError', false);
    case LOAD_PHOTO_ERROR:
      return state
        .set('allPhotos', [])
        .set('isLoading', false)
        .set('hasError', true);
    default:
      return state;
  }
}

export default photoGridReducer;
