import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './Main/index';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './config/configureStore';
import {Provider} from 'react-redux';
const store=configureStore();
ReactDOM.render(
    <Provider store={store}>
    <Router>
      <App />
    </Router>
    </Provider>,
  document.getElementById('root')
);

reportWebVitals();
