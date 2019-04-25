import React from 'react';

// const align = {
//     textAlign: 'center'
//   }

// const padding = {
//     padding: '40px'
//   }

const Entry = (props) =>  {
  return (
    <div>
      <li  key={props.key} >
        {props.title} : {props.content} 
      </li>
      <br/>
    </div>
  )
} 

export default Entry;
//add feature: LIMIT= 10, then MORE button
//limit url == ?limit=${PER_PAGE} const PER_PAGE= 20 

  
//add feature: 
 //if (entry.public === "yes") {
//<Link to="/user.id">See more </Link>

//add feature: 
// add click button to see the user profile and all their others, if public only 
