import React from 'react';
import ReactDOM from 'react-dom/client';
import './archive/V1/V1index.css';
import App from './App';
import ReactGA from 'react-ga';

// Initialize React Ga with your tracking ID
ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
