/*
 *
 * Header reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LOAD_HEADER,
  LOADING_HEADER_SUCCESS,
  LOADING_HEADER_ERROR,
} from './constants';

export const initialState = fromJS({
  header: null,
  isLoading: false,
  isError: false,
});

function headerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOAD_HEADER:
      return state.set('isLoading', true).set('isError', false);
    case LOADING_HEADER_SUCCESS:
      return state
        .set('header', action.header)
        .set('isLoading', false)
        .set('isError', false);
    case LOADING_HEADER_ERROR:
      return state.set('isLoading', false).set('isError', true);
    default:
      return state;
  }
}

export default headerReducer;
