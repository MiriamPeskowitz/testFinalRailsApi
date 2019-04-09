import React from 'react';

const violet = {color: 'violet'};

const Login = () =>

  <form>
    <h2 style={violet}>Login</h2>
    <div>
      <input type="text" name="username" placeholder="your name" />
      
      <label htmlFor="username">Username</label>
    </div>
    <div>
      <input type="password" name="password" placeholder="your password" />
      <label htmlFor="password">Password</label>
    </div>
    <input type="submit" value="login" />
  </form>
 
export default Login;