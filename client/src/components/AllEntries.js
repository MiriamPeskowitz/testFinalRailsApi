// This will list the index all the entries-- a wall of gried. 
// This is for display?

import React, { Component } from 'react';
import Entry from './Entry';

 const red = {
    color: '#cd5c5c'
  }

class AllEntries extends Component {
 

  render() {
    
    const { entries } = this.props;

    const entriesList = (entries) => {
      entries.map(entry => {
        return (
          <Entry
            key={entry.id}
            title = {entry.title}
            content = {entry.content}
            />
        )
      });
    }

    return(
      <div>
        <h2 style={red}> Entries</h2>
        <ul>
          { entriesList }
        </ul>
      </div> 

    )
  }
}

export default AllEntries;

//component: has a form to list the entries, in batch of ten EntriesList