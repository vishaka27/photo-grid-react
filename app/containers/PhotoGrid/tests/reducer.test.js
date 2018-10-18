import { fromJS } from 'immutable';
import photoGridReducer from '../reducer';

describe('photoGridReducer', () => {
  it('returns the initial state', () => {
    expect(photoGridReducer(undefined, {})).toEqual(fromJS({}));
  });
});
