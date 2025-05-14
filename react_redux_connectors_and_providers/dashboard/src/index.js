
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // ✅ imported thunk middleware
import { uiReducer } from './reducers/uiReducer'; // Or the rootReducer if you combined reducers

// ✅ Apply redux-thunk middleware to the Redux store
const store = createStore(uiReducer, applyMiddleware(thunk));

// ✅ Wrap your App component with Provider to make the store available throughout your app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
