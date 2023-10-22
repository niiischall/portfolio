import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

const rootDiv = document.getElementById('root')!;

ReactDOM.createRoot(rootDiv).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
