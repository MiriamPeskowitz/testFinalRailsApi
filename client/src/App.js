import React, { Component } from 'react';
import './App.css';
import AppRouter from './routes';
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
            <AppRouter/> 
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



