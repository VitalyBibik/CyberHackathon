import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './Vendor/fonts/index.scss';
import App from './components/app/app';
import { BrowserRouter as Router } from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
