import React from 'react';
import { connect } from 'react-redux'; // ✅ Import connect

// The App component
function App(props) {
  return (
    <div className="App">
      <h1>Dashboard</h1>
      <p>{props.isLoggedIn ? 'You are logged in!' : 'Please log in.'}</p>
    </div>
  );
}

// ✅ mapStateToProps function
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.ui.isLoggedIn, // Adjust this path based on your root reducer
  };
};

// ✅ Export connected component
export default connect(mapStateToProps)(App);
