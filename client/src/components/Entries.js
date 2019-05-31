



//refactored into entriesContainer and Entry

import React from 'react';
import Entry from './Entry';
import NewEntryLink from './NewEntryLink'
import  {  deleteEntry, editEntry } from '../actions/entriesActions';
const red = { color: '#cd5c5c'};
  debugger

const Entries = (props) => {
  const {entries, deleteEntry, editEntry} = this.props;

    <div>
      <h2 style={red}> Entries </h2>

      <NewEntryLink />

      {entries.map(entry => {
        <Entry key={entry.id } entry={entry} deleteEntry={deleteEntry} editEntry={editEntry} />
        })
       }  

    <NewEntryLink />
   
    </div>
}

// export default Entries;
// const listStyle = {
//     listStyle: 'none'
//   }



// { entries.map(entry => 
//           <Entry key={entry.id } entry={entry} deleteEntry={deleteEntry} editEntry={editEntry} />) }
          
// // If these are in EntriesContainer, do I need to call them as props, or is it automatic? 

// //  <Entries 
// //           entries={entries} 
// //           deleteEntry={deleteEntry} 
// //           editEntry={editEntry}/>

// const Entries = (props) => {
//   const {entries, deleteEntry, editEntry} = props;

//   const entriesList = entries.map((entry) => {
//     return (
//       <Entry 
//         key={ entry.id }
//         entry={ entry }
//         deleteEntry={ deleteEntry }
//         editEntry={ editEntry }
//        />     
//     )
//   });
    
//   return(
//     <div>
//       <ul style={ listStyle }>
//         { entriesList }
//       </ul>
//     </div>
//   );
// }  

// // Entries.defaultProps = {
// //   entry: 'Loading'
// // }


