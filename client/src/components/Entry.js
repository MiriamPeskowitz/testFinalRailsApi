import React from 'react';

const Entry = ({ entry: {title, content, id}, deleteEntry, editEntry}) =>
 
  <div>    
    <p>{title}: <br/> {content}</p>
    <button onClick={ () => deleteEntry({id}) }>Delete </button> 
    <button onClick={ () => editEntry({id}) } style={{ color: 'gray' }}>Edit </button>      
  </div>


// Entry.defaultProps = {
//   title: "Loading"
// }
export default Entry;
          //how do I get the name here instead of the user_id? 
//add entry.user.name 
//({entry.user_id})


//onClick={() => this.props.dispatch({ type: 'DELETE_POST', id:this.props.post.id})}
//add feature: LIMIT= 10, then MORE button
//limit url == ?limit=${PER_PAGE} const PER_PAGE= 20 

  
//add feature: 
 //if (entry.public === "yes") {
//<Link to="/user.id">See more </Link>

//add feature: 
// add click button to see the user profile and all their others, if public only 
