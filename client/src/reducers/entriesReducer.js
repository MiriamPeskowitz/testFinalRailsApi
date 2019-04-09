export default function entries_reducer(
  state = {
    loading: false,
    entries: []
  }, action) {

  switch(action.type) {

    case "LOADING_ENTRIES":
      return [...state, { loading: true }];

    case: "FETCH_ALL_ENTRIES":
      return {
        loading: false,
        entris: action.payload
      };
    default: 
      return state;  
  }
};
  