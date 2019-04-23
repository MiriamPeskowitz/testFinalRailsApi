// this component organizes the header and AppRouter (from which the containers and components are called)

import React, { Component } from 'react';
import AppRouter from './routes';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <AppRouter />
          </header>
        </div>
      </div>
    );
  };
};

export default App;

// //this was for the simple setup -- to make sure everything was wired correctly -- move to 
// const mapStateToProps = (state) => ({
//     ...state
// })

// const mapDispatchToProps = (dispatch) => ({
//   simpleAction: () => dispatch(simpleAction())
// })

// export default connect(mapStateToProps, mapDispatchToProps)(App)



