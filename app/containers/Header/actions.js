/*
 *
 * Header actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_HEADER,
  LOADING_HEADER_SUCCESS,
  LOADING_HEADER_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loadHeader() {
  return {
    type: LOAD_HEADER,
  };
}

export function headerLoaded(header) {
  return {
    type: LOADING_HEADER_SUCCESS,
    header,
  };
}

export function headerLoadingFailed(error) {
  return {
    type: LOADING_HEADER_ERROR,
    error,
  };
}
