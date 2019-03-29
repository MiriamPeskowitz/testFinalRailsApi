import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
      <React.fragment>
        <Route path='/' component={NAME THIS is this navbar?  --open screen content }/>
        <Route exact path='/all' component={all}/>
        <Route exact path='/login' component={login}/>
        <Route exact path='/about' component={about}/>
      </React.Fragment>
  </Router>  
  <App />, document.getElementById('root'));
//Do I delete app here? That seems wrong?? 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
