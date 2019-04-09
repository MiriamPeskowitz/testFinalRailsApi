
import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'; 
import Home from './components/Home';
import AllEntries from './components/AllEntries';

function AppRouter() {
  return(
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
            <li>
              <Link to="/entries/">Entries</Link>
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