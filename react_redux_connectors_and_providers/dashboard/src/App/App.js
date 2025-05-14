import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';

export class App extends React.Component {
  render() {
    const {
      isLoggedIn,
      displayDrawer,
      displayNotificationDrawer,
      hideNotificationDrawer,
    } = this.props;

    return (
      <>
        <Notifications
          displayDrawer={displayDrawer}
          handleHideDrawer={hideNotificationDrawer}
        />
        <div className="App">
          <Header handleDisplayDrawer={displayNotificationDrawer} />
          {isLoggedIn ? <CourseList /> : <Login />}
          <Footer />
        </div>
      </>
    );
  }
}

// Prop types
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
};

export const mapStateToProps = (state) => ({
  isLoggedIn: state.get('isUserLoggedIn'),
  displayDrawer: state.get('isNotificationDrawerVisible'),
});

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
