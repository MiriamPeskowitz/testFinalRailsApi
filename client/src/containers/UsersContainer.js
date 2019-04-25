//put the whole thing here and then learn to refactor into components 

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import '../App.css';
import  { createUser } from '../actions/userActions';
// import Signup from '../components/Signup';

const violet = {color: 'violet'}

class UsersContainer extends Component {
  constructor() {
    super()

    this.state = ({
      name: "",
      email: "",
      redirect: false
    })
//key: false inside render, if true, redirect to /entries
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
 
  onChange(event) {

    const field = event.target.name
    let state = this.state
    
    state[field] = event.target.value
    this.setState(state)
  }

  onSubmit(event) {
    event.preventDefault()
    console.log("GOT TO this.props.createUser")
    this.props.createUser({
        username: this.state.username, email: this.state.email
      }) 
    this.setState({
      username: "",
      email: "",
      redirect: true
    })
  }

  render() { 
   
    const { username, email } = this.state
    if (this.state.redirect === true) {
      return <Redirect to='/' /> }

     return (
        <form>
          <h2 style={violet}>Signup</h2>
          {/*<div>
            <input type="text" name="username" placeholder="pick a username" />
             </div>*/}
           <label htmlFor="username">Choose your User Name: <textarea rows="1" cols= "40" name="username" value={ username } placeholder="pick a username" onChange={ this.onChange }></textarea></label>
    
         
            <br/>

            <label htmlFor="email">Email: <textarea rows="1" cols= "40" name="email" placeholder="your email" onChange={ this.onChange } value= { email } ></textarea></label>
        
{/*
          <div>
            <input type="password" name="password" placeholder="password" />
           {/* <label htmlFor="password">Password</label>*/}
       

          <br/>

            <label htmlFor="confirm email">Confirm Email: <textarea rows="1" cols= "40" name="confirm email" placeholder="confirm your email" onChange={ this.onChange } value= { email } ></textarea></label>

          {/*<div>
            <input type="password" name="confirm-password" placeholder="confirmpassword" />
           {/* <label htmlFor="password">Password</label>
          </div>*/}

          <button type="submit">Signup</button>
        </form>
       
        )
    } 
}

const mapDispatchToProps = dispatch => bindActionCreators({
  createUser
}, dispatch)

export default connect(null, mapDispatchToProps)(UsersContainer);




  //below was copied from entry form container, started to change it before deciding to use what I have   
  //   return (
  //     <Signup onSubmit={ (event) => this.onSubmit(event) }/> //What do I need to pass in? 
  //     <form onSubmit={ (event) => this.onSubmit(event) }>
  //         <fieldset>
  //           <legend style={violet}> Signup</legend>
            
  //           <label htmlFor="Name">Name: <textarea rows="1" cols= "40" name="name" value={ name }  onChange={ this.onChange }></textarea></label>
      
  //           <br/>

  //           <label htmlFor="content">Entry: <textarea rows="5" cols= "50" name="content" onChange={ this.onChange } value= { content } ></textarea></label>
        
  //           <br/>
  //           <button type="submit">Add </button>

  //         </fieldset>

  //       <Link to='/entries' style={red}>Cancel/Return to Entries</Link>
      
  //     </form>
  //   ) 
  // }

//how do I add, return to entries upon submit? 


// const mapStateToProps = state => {
//   return {

//     entries: state.entryFormReducer.entries
//   }
// }

//will b login and signup stuff 



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


 


