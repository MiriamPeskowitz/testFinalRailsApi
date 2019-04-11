



// imports NavBar, which imports Button
//passes props down to button, maybe? Or does it all in one? 
//iterates through the props? 
//this is a smart container, because it deals with prps 
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// // import Button from '../components/Button';
// // import Grid from '@material-ui/core/Grid';
// // import { actions as props } from ../actions/
// // import NavBar from './components/NavBar';
// // import Home from './components/Home';
// // import AllEntries from './components/AllEntries';
// // import About from './components/About';
// // import Login from './components/Login';
// // import Signup from './components/Signup';

// class Navbar extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Navbar render</h1>
//       </div>
//     )
//   }
// }

// export default Navbar;


//Wednsday: should this container be the sign in? if so, change name from navbar to users ,make actions for login, etc, and for CRUD for entries 


// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// // import  {  } from '../actions/entriesActions';

// class Users extends Component {

//   componentWillMount() {
//       // fetchAllEntries();
//   };

//   render() {
//     return (
//       <div>
//         <Signup />
//         <Login />
//         <FindUser />
//       </div>
//     )
//   }
// }
 

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { login } from './reducers/rootReducer';
// import Login from 'components/Login';

// Class Users extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {};

//     this.onSubmit = this.onSubmit.bind(this);
//   }
//   render() {
//     let {email, password } = this.state; 
//     let (isLoginPending, isLoginSuccess, loginError) = this.props;
//     return (
//        <Login onSubmit={this.onSubmit} />

//       )
//   }
 

// }

// const mapStateToProps = state => {
//   return {
//     isLoginPending: state.isLoginPending,
//     isLoginSuccessful: state.isLoginSuccessful, 
//     loginError: state.LoginError
//     // users: state.users
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     login: (email, password) => dispatch(login(email, password))
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Users); 


 


