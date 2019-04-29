
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import '../App.css';
import  { loginUser } from '../actions/userActions';
// import Signup from '../components/Signup';

const violet = {color: 'violet'}

class LoginContainer extends Component {
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
    
    this.props.loginUser({name: this.state.name, email: this.state.email}) 

    this.setState({
      name: "",
      email: "",
      redirect: true
    })
  }

  render() { 
   
    const { name, email } = this.state
    if (this.state.redirect === true) {
      return <Redirect to='/entries/new' /> }

     return (
      <form onSubmit={ (event) => this.onSubmit(event) }>
        <h2 style={violet}>Login</h2>
       
         <label htmlFor="name">  Username: <textarea rows="1" cols= "40" name="name" value={ name } placeholder="name" onChange={ this.onChange }></textarea></label>
  
       
          <br/>

          <label htmlFor="email">Email: <textarea rows="1" cols= "40" name="email" placeholder="your email" onChange={ this.onChange } value= { email } ></textarea></label>
      
      <br/>
        <button type="submit">Login</button>
      </form>
     
      )
    } 
}

const mapDispatchToProps = dispatch => bindActionCreators({
  loginUser
}, dispatch)

export default connect(null, mapDispatchToProps)(loginContainer);

