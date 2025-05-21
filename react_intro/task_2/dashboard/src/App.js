import React from 'react';
import './App.css';
import logo from './holberton-logo.png';
import { getFullYear, getFooterCopy } from '../task_1/dashboard/src/utils';

function App() {
  return (
    <>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="Holberton logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <br />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <br />

        <button type="button">OK</button>
      </div>
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </div>
    </>
  );
}

export default App;
