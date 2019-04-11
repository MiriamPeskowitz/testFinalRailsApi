//uses react-router to set nav bar through NavLink
// sets routes

import React from 'react';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom'; 
import Content from './containers/Content';
import Home from './components/Home';
import Story from './components/Story';
import AllEntries from './components/AllEntries';
import Login from './components/Login';
import Signup from './components/Signup';

const link = {
  width: '100px',
  padding: '0px',
  margin: '2px 2px 2px',
  textDecoration: 'none',
  color: 'white'
 }

const listStyle = {
  listStyle: 'none'
}
function AppRouter() {
  return(
    <Router> 
      <div>      
          <nav>
            <ul style={ listStyle }>
              <li>
                <NavLink 
                  to="/"
                  exact
                  style={link}
                  activeStyle={{ background: 'royalBlue'}}
                  >Home</NavLink>
              </li>

              <li>
                <NavLink
                  to="/story"
                  exact
                  style={link}
                  activeStyle={{background: '#e69500'}}
                 >Story</NavLink>
              </li>

              <li>
                <NavLink 
                  to="/signup"
                  exact
                  style={link}
                  activeStyle={{background: 'violet'}}
                  >Signup</NavLink> or <NavLink 
                  to="/login"
                  exact
                  style={link}
                  activeStyle={{background: 'violet'}}
                  >Login</NavLink> 
              </li>  

              <li>
                <NavLink 
                  to="/entries"
                  exact
                  style={link}
                  activeStyle={{background: '#cd5c5c'}}

                >Entries</NavLink>
              </li>
          
            </ul>
          </nav>
        <Route path='/' component={Home} />
        <Route exact path='/entries' component={AllEntries} />
        <Route exact path='/story' component={Story} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        {/*add find, and add NavLink for find a user /search */}
      </div>
    </Router>   
  )
}

export default AppRouter;
// add     //add onClick -- // to NavLink for entries, that calls somewhere? 