// import React, { Component } from 'react';
// import { NavLink, Route } from 'react-router-dom';

// const link = {
//   width: '100px',
//   padding: '0px',
//   margin: '2px 2px 2px',
//   textDecoration: 'none',
//   color: 'white'
//  }

// const listStyle = {
//     listStyle: 'none'
//   }

// class Navbar extends Component {

//   render() {
//       return (
//         <nav>
//           <ul style={ listStyle }>
//             <li>
//               <NavLink 
//                 to="/"
//                 exact
//                 style={link}
//                 activeStyle={{ background: 'royalBlue'}}
//                 >Home</NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/story"
//                 exact
//                 style={link}
//                 activeStyle={{background: '#e69500'}}
//                >Story</NavLink>
//             </li>

//             <li>
//               <NavLink 
//                 to="/signup"
//                 exact
//                 style={link}
//                 activeStyle={{background: 'violet'}}
//                 >Signup</NavLink> or <NavLink 
//                 to="/login"
//                 exact
//                 style={link}
//                 activeStyle={{background: 'violet'}}
//                 >Login</NavLink> 
//             </li>  

//             <li>
//               <NavLink 
//                 to="/entries"
//                 exact
//                 style={link}
//                 activeStyle={{background: '#cd5c5c'}}

//               >Entries</NavLink>
//             </li>
//           </ul>
//         </nav>
//     )
//   }
// }

// export default Navbar;