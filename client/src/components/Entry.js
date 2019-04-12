import React from 'react';

const Entry = (props) =>  {
  return (
      <li>
        {props.title} 
        {props.key}
        {props.content}     
      </li>
  )
} 

export default Entry;
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
  


 //if (entry.public === "yes") {
    //<Link to="/user.id">See more </Link>
    // add click button to see the user profile and all their others, if public only 
