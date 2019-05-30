//uses react-router to set nav bar through NavLink
//sets routes

import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'; 
import EntriesContainer from './containers/EntriesContainer';
import EntryFormContainer from './containers/EntryFormContainer';
// import UsersContainer from './containers/futureContainers/UsersContainer';
import Home from './components/Home';
import Story from './components/Story';
// import Login from './components/Login';
// import Signup from './components/Signup';
import Navbar from './components/Navbar';


function AppRouter() {
  return(
    <Router> 
      <div>      
        <Navbar/>
      {/*add <Switch></Swithch to wrap around Routes? first route that matches, 
      Also, explain when to use exact and when not */}
        <Route exact path='/' component={Home} />
        <Route exact path='/story' component={Story} />
        <Route exact path='/entries' component={EntriesContainer} />
        <Route exact path='/entries/new' component={EntryFormContainer} />
        {/*<Route exact path='/login' component={Login} />*/}
        {/*<Route exact path='/signup' component={UsersContainer} />*/}
      </div>
    </Router>   
  )
}

export default AppRouter;

  // <Route exact path='/' render={ () =>  loggedIn() ? <TodoList/> : <Redirect to="/login"/> }/>
  //     <Route path='/signup' component={ () => loggedIn() ? <Redirect to="/"/> : <Signup/> }/>
  //     <Route path='/login' component={ () => loggedIn() ? <Redirect to="/"/> : <Login/> }/>
  //     <Route path='/logout' component={ () => logout() }/>
  //     <Route path='/todos' component={ () =>  loggedIn() ? <TodoList/> : <Redirect to="/login"/> }/>