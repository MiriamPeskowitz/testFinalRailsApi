//uses react-router to set nav bar through NavLink
//sets routes

import React from 'react';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom'; 
import Home from './components/Home';
import Story from './components/Story';
import EntriesContainer from './containers/EntriesContainer';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';

function AppRouter() {
  return(
    <Router> 
      <div>      
        <Navbar/>
        <Route path='/' component={Home} />
        <Route exact path='/entries' component={EntriesContainer} />
        <Route exact path='/story' component={Story} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
      </div>
    </Router>   
  )
}

export default AppRouter;