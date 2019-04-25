//uses react-router to set nav bar through NavLink
//sets routes

import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'; 
import EntriesContainer from './containers/EntriesContainer';
import EntryFormContainer from './containers/EntryFormContainer';
import UsersContainer from './containers/UsersContainer';
import Home from './components/Home';
import Story from './components/Story';
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
        <Route exact path='/signup' component={UsersContainer} />
        <Route exact path='/entries/new' component={EntryFormContainer} />
       {/*  <Route exact path='/users/signup' component={UsersFormContainer} />*/}
      
      </div>
    </Router>   
  )
}

export default AppRouter;