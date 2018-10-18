import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the photoGrid state domain
 */

const selectPhotoGridDomain = state => state.get('photoGrid', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by PhotoGrid
 */

const makeSelectPhotoGrid = () =>
  createSelector(selectPhotoGridDomain, substate => substate.toJS());

export default makeSelectPhotoGrid;
export { selectPhotoGridDomain };
