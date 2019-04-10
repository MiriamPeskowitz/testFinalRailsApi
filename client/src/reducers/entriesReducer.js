

export default function entriesReducer(
  state = {
    loading: false,
    entries: []
  }, action) {

  switch(action.type) {

    case "LOADING_ENTRIES":
      return [...state, { loading: true }];

    case "FETCH_ALL_ENTRIES":
      return {
        loading: false,
        entries: action.payload
      };
      
    default: 
      return state;  
  }
};

// add 'CREATE_ENTRY'  'UPDATE_ENTRY' 'DELETE_ENTRY'
  