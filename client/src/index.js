import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

import Sample from './containers/sample';

const root = ReactDOM.createRoot(document.getElementById('root'));

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

root.render(
  <React.StrictMode>
    <Sample />
  </React.StrictMode>
);
