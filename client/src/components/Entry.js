import React from 'react';

const Entry = (props) => {
  const {entry, deleteEntry, editEntry} = props 
  //add entry.user.name 

// const shouldComponentUpdate = (nextProps, nextState) => {
//   const shouldUpdate  = this.props.status !== nextProps.status;
//   return shouldUpdate;
// }

  return (
    <div>
      <li>
        <p> {entry.title}: 
        <br/>{entry.content} 
        {/*({entry.user.name})*/}
        </p>
        <button onClick={ () => deleteEntry(entry.id) }>Delete </button> 
        <button  onClick={ () => editEntry(entry.id) } style={{ color: 'gray' }}>Edit </button> 
      </li>
      <br/>
    </div>
  );
}
export default Entry;

  
//add feature: 
 //if (entry.public === "yes") {
//<Link to="/user.id">See more </Link>

//add feature: 
// add click button to see the user profile and all their others, if public only 
