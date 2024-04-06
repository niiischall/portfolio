import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const rootDiv = document.getElementById('app')!;

let data;

if (typeof window !== 'undefined') {
  data = window?.__data__;
}

hydrateRoot(
  rootDiv,
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>,
);
