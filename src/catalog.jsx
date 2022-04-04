import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Catalog from './Catalog';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Catalog />
  </React.StrictMode>,
  document.getElementById('catalog')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
