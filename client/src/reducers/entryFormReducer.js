export default function entryFormReducer(
   state={}, action) {
  
  console.log("top of entry form reducer:", state)

    switch(action.type) {
      case "CREATE_ENTRY":
       
        console.log("Create_Entry action.payload:", action.payload)
       
        return {
          ...state, 
        entries: [ ...state.entries, action.payload ]
        }

      default: 
        return state;  
    }

  }  