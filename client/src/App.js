import React, { Component } from 'react';
import './App.css';
import routes from './routes';
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
            
          </header>
    
        </div>

      </div>
    );
  };
};
//this was for the simple setup -- move to 
const mapStateToProps = (state) => ({
    ...state
})

const mapDispatchToProps = (dispatch) => ({
  simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)



