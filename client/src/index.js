// this component wraps the App with the store, and with Provider/react-redux) 
//the serviceWorker was default/not sure whether I'll need it or not

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <Provider store={ store }> 
     <App />
  </Provider>, 
  document.getElementById('root')
);
 
serviceWorker.unregister();
