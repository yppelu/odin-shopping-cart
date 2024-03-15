import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

if (!localStorage.getItem('gamesInCart')) {
  localStorage.setItem('gamesInCart', JSON.stringify([]));
}

import Router from './components/Router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
