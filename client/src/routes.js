
import React from 'react';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom'; 
import Home from './components/Home';
import AllEntries from './components/AllEntries';


const link = {
  width: '100px',
  padding: '2px',
  margin: '0 2px 2px',
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
                activeStyle={{ background: 'darkblue'}}
                >Home</NavLink>
            </li>
            
            <li>
              <NavLink 
                to="/entries/"
                exact
                style={link}
                activeStyle={{background: 'darkblue'}}
              >Entries</NavLink>
            </li>
            
            <li>
              <NavLink
                to="/about/"
                exact
                style={link}
                activeStyle={{background: 'darkblue'}}
               >About</NavLink>
            </li>
            <li>
              <NavLink 
                to="/users/"
                exact
                style={link}
                activeStyle={{background: 'darkblue'}}
                >Users</NavLink>
            </li>  
          </ul>
        </nav>
        <Route path='/' component={Home} />
        <Route exact path='/all' component={AllEntries} />
          {/*  <Route exact path='/about' component={About} */}/>
           {/* <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
}
*/}   </div>
    </Router> 
     
  )
}
export default AppRouter