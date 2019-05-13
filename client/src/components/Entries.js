import React from 'react';
import Entry from './Entry';

const listStyle = {
    listStyle: 'none'
  }
const Entries = (props) => {
  const {entries, deleteEntry, editEntry} = props;

  const entriesList = entries.map((entry) => {
    return (
      <Entry 
        entry={entry}
        deleteEntry={ deleteEntry }
        editEntry={ editEntry }
        key= {entry.id}
        />
    )
  });
    
  return(
    <div>
      <ul style={ listStyle }>
        { entriesList }
      </ul>
    </div>
  );
}  

Entries.defaultProps = {
  entry: 'Loading'
}

export default Entries;
