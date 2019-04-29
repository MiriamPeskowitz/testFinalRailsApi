import React from 'react';

const Entry = (props) => {
  const {entry, deleteEntry, editEntry} = props 
  // console.log(props)
  return (
    <div>
      <li key={entry.id} >
          <p>{entry.title} : <br/>{entry.content} </p>
          <button onClick={ () => deleteEntry(entry) }>Delete </button> 
          <button onClick={ () => editEntry(entry) }>Edit </button>       
        </li>
      <br/>
    </div>
  );
}
export default Entry;
//add feature: LIMIT= 10, then MORE button
//limit url == ?limit=${PER_PAGE} const PER_PAGE= 20 

  
//add feature: 
 //if (entry.public === "yes") {
//<Link to="/user.id">See more </Link>

//add feature: 
// add click button to see the user profile and all their others, if public only 
