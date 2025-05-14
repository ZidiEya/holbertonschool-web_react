import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Create the mapStateToProps function to connect the user state from Redux
const mapStateToProps = (state) => ({
  user: state.user, // Assuming `user` is part of your Redux state
});

class Footer extends React.Component {
  render() {
    const { user } = this.props; // Access `user` from props

    return (
      <footer>
        <p>
          {user ? `Logged in as: ${user.name}` : 'Not logged in'}
        </p>
      </footer>
    );
  }
}

// PropTypes for validation
Footer.propTypes = {
  user: PropTypes.object, // User is expected to be an object
};

// Connect the component to Redux state
export default connect(mapStateToProps)(Footer);
