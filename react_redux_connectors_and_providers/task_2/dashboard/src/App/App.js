import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginRequest } from '../../actions/uiActionCreators';
class App extends Component {
  // Remove any old login and logout functions, as these are now passed in props

  render() {
    const { loginRequest } = this.props; // Access loginRequest from props

    return (
      <div>
        <button onClick={() => loginRequest('user@example.com', 'password')}>
          Login
        </button>
      </div>
    );
  }
}

// Define propTypes for validation
App.propTypes = {
  loginRequest: PropTypes.func.isRequired,
};

// Map dispatch to props
const mapDispatchToProps = {
  loginRequest, // Automatically mapped by Redux
};

export default connect(null, mapDispatchToProps)(App);
