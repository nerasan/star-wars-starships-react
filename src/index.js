import React from 'react';
import ReactDOM from 'react-dom';
// React router
import { BrowserRouter as Router, Switch } from "react-router-dom";

// Components imports
import App from './App';
// CSS imports
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Switch>
      <App />
    </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
