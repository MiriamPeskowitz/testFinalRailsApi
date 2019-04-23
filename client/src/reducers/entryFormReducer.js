export default function entryFormReducer(
    state = {
      title: '',
      content: ''
    }, action) 

    switch(action.type) {
      case "CREATE_ENTRY":
        return {
          ...state
        }
      default: 
        return state;  
    }


