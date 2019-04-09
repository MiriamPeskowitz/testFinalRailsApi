import React, { Component } from 'react';
import './App.css';
// import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import Content from './containers/Content';
import Navbar from './containers/Navbar';
// import Home from './components/Home';
import { simpleAction } from './actions/simpleAction';


class App extends Component {
  //componentDidMount() {}

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Mourning/Together</h1>
              <Navbar />
          </header>
          <Content />
        </div>

       {/* <Router>
          <React.Fragment>
            <Route path='/' component={Home} />
            <Route exact path='/all' component={AllEntries} />
            <Route exact path='/about' component={About} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />

          </React.Fragment>
        </Router> */}
      </div>
    );
  };
};

const mapStateToProps = (state) => ({
    ...state
})

const mapDispatchToProps = (dispatch) => ({
  simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

