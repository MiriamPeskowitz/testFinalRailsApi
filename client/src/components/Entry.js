import React from 'react';

const Entry = (props) => {
  const {entry, deleteEntry, editEntry} = props 
  // console.log(props)
  //add entry.user.name 


  return (
    <div>
      <li>
          <p> {entry.title}: <br/>{entry.content} 
          ({entry.user_id})
          </p>
          <button onClick={ () => deleteEntry(entry.id) }>Delete </button> 
          <button  onClick={ () => editEntry(entry.id) } style={{ color: 'gray' }}>Edit </button>       
      </li>
      <br/>
    </div>
  );
}

Entry.defaultProps = {
  title: "Loading"
}
export default Entry;
          //how do I get the name here instead of the user_id? 


//onClick={() => this.props.dispatch({ type: 'DELETE_POST', id:this.props.post.id})}
//add feature: LIMIT= 10, then MORE button
//limit url == ?limit=${PER_PAGE} const PER_PAGE= 20 

  
//add feature: 
 //if (entry.public === "yes") {
//<Link to="/user.id">See more </Link>

//add feature: 
// add click button to see the user profile and all their others, if public only 
