export default function entriesReducer(
  state = {
    loading: false,
    entries: [], 
    redirect: ''
  }, action) {

  // console.log("got to entries reducer action.type", state)
  
  switch(action.type) {
  
    // case "LOADING_ENTRIES":
    //   return {...state,  loading: true };

    case "FETCH_ALL_ENTRIES":
      
      console.log("got to fetch all entries in reducer")
      
      return {
        // loading: false,
        ...state, 
        entries: action.payload
      };


    case "CREATE_ENTRY":
     
      console.log("Create_Entry action.payload:", action.payload)
     
      return {
        ...state, 
      entries: [ ...state.entries, action.payload.entries ]
      }

    case "DELETE_ENTRY":
        console.log("got to delete entries in reducer");
     
        const entries = state.entries.filter(entry => entry.id !== action.entry.id);
  
        return { entries }
        
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
  