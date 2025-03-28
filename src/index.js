import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // 👈 import this
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider> {/* 👈 wrap the router */}
    <BrowserRouter basename='/'>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
