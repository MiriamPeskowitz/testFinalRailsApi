import React from 'react';

const Entry = ({ entry: { id, title, content }) =>
  <div>
  <h3>{ title} </h3>
  <p>{ content }</p> 
    // add click button to see the user profile and all their others, if public only 
  </div>

export default Entry;