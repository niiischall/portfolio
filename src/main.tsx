import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root') ?? document.createElement('div');

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
