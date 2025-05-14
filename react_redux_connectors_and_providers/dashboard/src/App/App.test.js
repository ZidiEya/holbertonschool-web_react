import { mapStateToProps } from './App';
import { fromJS } from 'immutable';

describe('Redux: mapStateToProps', () => {
  it('should return isLoggedIn and displayDrawer values from state', () => {
    const state = fromJS({
      isUserLoggedIn: true,
      isNotificationDrawerVisible: true
    });

    const props = mapStateToProps(state);

    expect(props).toEqual({
      isLoggedIn: true,
      displayDrawer: true
    });
  });

  it('should return default false values when state is false', () => {
    const state = fromJS({
      isUserLoggedIn: false,
      isNotificationDrawerVisible: false
    });

    const props = mapStateToProps(state);

    expect(props).toEqual({
      isLoggedIn: false,
      displayDrawer: false
    });
  });
});
