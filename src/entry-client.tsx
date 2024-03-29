import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';

const rootDiv = document.getElementById('root')!;

ReactDOM.hydrateRoot(
  rootDiv,
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
