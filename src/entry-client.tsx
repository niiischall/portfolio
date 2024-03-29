import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const rootDiv = document.getElementById('app')!;

hydrateRoot(
  rootDiv,
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
