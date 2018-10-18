/*
 *
 * PhotoGrid actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_PHOTOS,
  LOAD_PHOTO_SUCCESS,
  LOAD_PHOTO_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loadPhotos() {
  return {
    type: LOAD_PHOTOS,
  };
}

export function photoLoaded(photos) {
  return {
    type: LOAD_PHOTO_SUCCESS,
    photos,
  };
}

export function photoLoadingError(error) {
  return {
    type: LOAD_PHOTO_ERROR,
    error,
  };
}
