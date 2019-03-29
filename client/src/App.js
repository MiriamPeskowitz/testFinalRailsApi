import React, { Component } from 'react';
import './App.css';
import store from './store/index.js';
import NavBar from './containers/NavBarContainer';
//   './navbarContainer'
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
      </div>
      
      <div className="App">
        <header className="App-header">
          <p>
            Mourning
          </p>
          {/*<a code for links 
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>*/}
        </header>
      </div>
    );
  }
}

export default App;
