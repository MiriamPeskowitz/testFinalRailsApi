import React from 'react';

const violet = {color: 'violet'};

const Signup = () =>
  <form>
    <h2 style={violet}>Signup</h2>
    <div>
      <input type="text" name="username" placeholder="pick a username" />
    </div>

    <div>
      <input type="password" name="password" placeholder="password" />
    </div>

    <div>
      <input type="password" name="confirm-password" placeholder="confirm password" />
    </div>

    <input type="submit" value="login" />
  </form>
 
export default Signup;