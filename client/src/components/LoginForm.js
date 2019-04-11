import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { login } from '../actions/login'

const violet = {color: 'violet'};

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange=this.onChange.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    this.setState = this.state;
  }

//validation-- future feature 

  onChange(e) {
    this.setState({ 
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
       <form onSubmit={this.onSubmit}>
        <h2 style={violet}>Login</h2>
        <div>
          <input type="text" name="username" placeholder="username/email" onChange={this.onChange}/>
          
      {/*    <label htmlFor="username">Username</label>*/}
        </div>
        <div>
          <input type="password" name="password" placeholder="your password" onChange={this.onChange}/>
        {/*  <label htmlFor="password">Password</label>*/}
        </div>
        <input type="submit" value="login" />
      </form>
    )
  } 
 }
//  LoginForm.propTypes = {
//   login: React.propTypes.func.isRequired
// }
// export default connect(null, { login })(LoginForm);
export default LoginForm;