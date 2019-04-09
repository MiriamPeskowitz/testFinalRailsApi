//uses react-router to set nav bar through NavLink
// sets routes

import React from 'react';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom'; 
import Home from './components/Home';
import About from './components/About';
import AllEntries from './components/AllEntries';
import Login from './components/Login';


const link = {
  width: '100px',
  padding: '0px',
  margin: '0 0px 0px',
  textDecoration: 'none',
  color: 'white'

}

const noBullets = {
  listStyle: 'none'
}

function AppRouter() {
  return(
    <Router>
      <div>
        <nav>
          <ul style={ noBullets }>
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
                to="/entries"
                exact
                style={link}
                activeStyle={{background: 'IndianRed'}}
              >Entries</NavLink>
            </li>
            
            <li>
              <NavLink
                to="/about"
                exact
                style={link}
                activeStyle={{background: '#e69500'}}
               >About</NavLink>
            </li>
            <li>
              <NavLink 
                to="/login"
                exact
                style={link}
                activeStyle={{background: 'violet'}}
                >Login</NavLink>
            </li>  
          </ul>
        </nav>

        <Route path='/' component={Home} />
        <Route exact path='/entries' component={AllEntries} />
        <Route exact path='/about' component={About} />
        <Route exact path='/login' component={Login} />
            {/*<Route exact path='/signup' component={Signup} />*/}
}
*/}   </div>
    </Router> 
     
  )
}
export default AppRouter