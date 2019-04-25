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
    
    this.props.createUser({name: this.state.name, email: this.state.email}) 

    this.setState({
      name: "",
      email: "",
      redirect: true
    })
  }

  render() { 
   
    const { name, email } = this.state
    if (this.state.redirect === true) {
      return <Redirect to='/' /> }

     return (
      <form onSubmit={ (event) => this.onSubmit(event) }>
        <h2 style={violet}>Signup</h2>
        {/*<div>
          <input type="text" name="username" placeholder="pick a username" />
           </div>*/}
         <label htmlFor="name">Choose your User Name: <textarea rows="1" cols= "40" name="name" value={ name } placeholder="name" onChange={ this.onChange }></textarea></label>
  
       
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





