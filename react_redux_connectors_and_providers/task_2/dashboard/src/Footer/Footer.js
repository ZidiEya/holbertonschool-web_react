import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Create mapStateToProps to map the user state from Redux to the user prop
const mapStateToProps = (state) => ({
  user: state.user, // Assuming user is part of the Redux state
});

class Footer extends React.Component {
  render() {
    const { user } = this.props; // Access user from Redux props

    return (
      <footer>
        <p>
          {user ? `Logged in as: ${user.name}` : 'Not logged in'}
        </p>
      </footer>
    );
  }
}

// Prop validation
Footer.propTypes = {
  user: PropTypes.object, // user is expected to be an object
};

// Export the connected Footer component
export default connect(mapStateToProps)(Footer);
