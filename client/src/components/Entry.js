import React, { Component } from 'react';

class Entry extends Component {
  render() {
    return (
      <div>
        <li>
          {this.props.entry.title}
        
        </li>
       </div> 
      )
  }
}  //add content 

// const Entry = (entry: {id, title, content})  =>  {
//     <div key={id}>
//       <h2> {title} </h2>
//       <p> {content} </p>        
//       {/*
//       <li key={this.props.entry.id}>
//         <h3>{ this.props.entry.title }</h3>
//         <p>{ this.props.entry.content }</p>
//       </li>  */}
//     </div>
// }
  
export default Entry;

 //if (entry.public === "yes") {
    //<Link to="/user.id">See more </Link>
    // add click button to see the user profile and all their others, if public only 
