export default (state, action) => {
  console.log(action)

  switch (action.type) {
    case "FIRST_ACTION"
      return {
        ...state,  :
      }
    default: 
     return state;
  }
};