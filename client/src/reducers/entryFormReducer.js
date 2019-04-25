export default function entryFormReducer(
    state = {
      title: '',
      content: ''
    }, action) {
  
  console.log("got to entry form reducer action.type", state)

    switch(action.type) {
      case "CREATE_ENTRY":
       
        console.log("got to create entry in reducer")
       
        return {
          ...state, 
        entries: [ ...state.entries, action.payload ]
        }

      default: 
        return state;  
    }

  }  