import React from 'react';
import Entry from './Entry';


const listStyle = {
    listStyle: 'none'
  }
const Entries = (props) => {
    const {entries} = props;

    const entriesList = entries.map((entry) => {
      return (
        <Entry
          key={entry.id}
          title={entry.title}
          content={entry.content}
          />
        )
    });
    
    return(
      <div>
        <ul style={ listStyle }>
          {entriesList}
        </ul>
      </div>
    );
  }  

export default Entries;