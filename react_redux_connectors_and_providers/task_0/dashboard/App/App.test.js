import { mapStateToProps } from './App';
import { fromJS } from 'immutable';

describe('mapStateToProps', () => {
  it('should return the right object when passing state', () => {
    const state = fromJS({
      isUserLoggedIn: true,
    });
    const result = mapStateToProps(state);
    expect(result).toEqual({ isLoggedIn: true });
  });
});
