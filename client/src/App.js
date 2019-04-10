import React, { Component } from 'react';
import './App.css';
import AppRouter from './routes';
import Content from './containers/Content';
// import Users from './components/Users';

class App extends Component {
  //componentDidMount() {}

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <AppRouter /> 
          </header>
{/*          <section>
            <Content />
          </section>*/}
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



