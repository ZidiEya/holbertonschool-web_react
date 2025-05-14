import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';

class Header extends React.Component {
  handleLogout = (e) => {
    e.preventDefault();
    this.props.logout();
  };

  render() {
    const { user } = this.props;

    return (
      <header className="App-header">
        <h1>School dashboard</h1>
        {user && user.email && (
          <p>
            Welcome <strong>{user.email}</strong>{' '}
            <a href="#" onClick={this.handleLogout}>
              (logout)
            </a>
          </p>
        )}
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
};

Header.defaultProps = {
  user: null,
  logout: () => {},
};

// Get user from Redux store
const mapStateToProps = (state) => ({
  user: state.user,
});

// Connect logout action
const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
