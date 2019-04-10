import React from 'react';

const violet = {color: 'violet'};

const Login = () =>
  <form>
    <h2 style={violet}>Signup</h2>
    <div>
      <input type="text" name="username" placeholder="pick a username" />
      
  {/*    <label htmlFor="username">Username</label>*/}
    </div>

    <div>
      <input type="password" name="password" placeholder="password" />
     {/* <label htmlFor="password">Password</label>*/}
    </div>
    <div>
      <input type="password" name="confirm-password" placeholder="confirmpassword" />
     {/* <label htmlFor="password">Password</label>*/}
    </div>

    <input type="submit" value="login" />
  </form>
 
export default Login;