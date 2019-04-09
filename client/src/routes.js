
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'; 

export default (

       <Router>
          <React.Fragment>
            <Route path='/' component={Home} />
            <Route exact path='/all' component={AllEntries} />
            <Route exact path='/about' component={About} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />

          </React.Fragment>
        </Router> 

        )