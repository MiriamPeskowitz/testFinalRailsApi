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


// From other file: 
//     const { name, email } = this.state
//     if (this.state.redirect === true) {
//       return <Redirect to='/' /> }

//      return (
//       <form onSubmit={ (event) => this.onSubmit(event) }>
//         <h2 style={violet}>Signup</h2>
       
//          <label htmlFor="name">  Choose your username: <textarea rows="1" cols= "40" name="name" value={ name } placeholder="name" onChange={ this.onChange }></textarea></label>
  
       
//           <br/>

//           <label htmlFor="email">Email: <textarea rows="1" cols= "40" name="email" placeholder="your email" onChange={ this.onChange } value= { email } ></textarea></label>
      

// {/* Removed for the time being; needs its  OnChange value separated from the first email; and it needs some logic 
//         <br/>

//           <label htmlFor="confirm email">Confirm Email: <textarea rows="1" cols= "40" name="confirm email" placeholder="confirm your email" onChange={ this.onChange } value= { email } ></textarea></label>
// */}
//       <br/>
//         <button type="submit">Signup</button>
//       </form>
     
//       )
//     } 