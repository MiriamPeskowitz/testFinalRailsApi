import {  FETCH_ALL_ENTRIES, CREATE_ENTRY, DELETE_ENTRY } from '../actions';

//add EDIT_ENTRY

export default function entriesReducer(state = {
    loading: false,
    entries: [], 
    redirect: ''
  }, action) {

  // console.log("got to entries reducer action.type", state)
  
  switch(action.type) {

    case FETCH_ALL_ENTRIES:  
   
      return {...state, entries: action.payload };

      // return { ...state, entries: action.payload };
      // console.log("got to fetch all entries in reducer",  action.payload)  
      // return {  ...state, entries: action.payload };

//find correct code for the reducers 

    case CREATE_ENTRY:   
      // console.log("Create_Entry action.payload:", action.payload)
      return {...state, entries: action.payload}
      // return { ...state, entries: [...state.entries, action.payload.entries ]  }
        //or action.payload
     

    case DELETE_ENTRY:
      console.log("got to delete entries in reducer");
      return { ...state, entries: state.entries.filter(entry => entry.id !== action.payload.id)}
        // const entries = state.entries.filter(entry => entry.id !== action.payload);
  
    //     // return { entries }
        
    default: 
      return state;  
  }
};
//something like this 
   //  case "EDIT_ENTRY":
   //    console.log("got to edit entries in reducer")
   //    return {
   //      const editedEntry = state.entries.find(entry => entry.id === action.id
   //        )
   //      entry.text = action.text
   //      return editedEntry
   
   // ...action.payload.entry, 
  //         redirect: true  
  //       }
  //     }
  //     return {...entry}
  //     )}

   


// add 'CREATE_ENTRY'  'UPDATE_ENTRY' 'DELETE_ENTRY'

// export default function entryFormReducer(
//    state={}, action) {
  
//   // console.log("top of entry form reducer:", state)

//     switch(action.type) {
//       case "CREATE_ENTRY":
       
//         console.log("Create_Entry action.payload:", action.payload)
       
//         return {
//           ...state, 
//         entries: [ ...state.entries, action.payload ]
//         }

//       default: 
//         return state;  
//     }

//   }  
  