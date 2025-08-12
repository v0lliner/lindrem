import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Mount the React application into the root element. React 18 recommends
// using createRoot rather than ReactDOM.render. See
// https://reactjs.org/docs/concurrent-mode.html for details.
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);