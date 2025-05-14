// task_1/dashboard/src/App/App.js

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

// If you are using Immutable.js
export const mapStateToProps = (state) => ({
  isLoggedIn: state.get('isUserLoggedIn'),
  displayDrawer: state.get('isNotificationDrawerVisible'),
});

// If you're using plain JS objects instead, use this instead:
// export const mapStateToProps = (state) => ({
//   isLoggedIn: state.ui.isUserLoggedIn,
//   displayDrawer: state.ui.isNotificationDrawerVisible,
// });

function App({ isLoggedIn, displayDrawer }) {
  return (
    <>
      {displayDrawer && <Notifications />}
      <div className="App">
        <Header />
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
};

export default connect(mapStateToProps)(App);
