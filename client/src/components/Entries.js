//refactored into entriesContainer and Entry

// import React from 'react';
// import Entry from './Entry';
// //do I need to import deleteEntry and editEntry? 

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

// export default Entries;
