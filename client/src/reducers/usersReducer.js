export default function userReducer(
  state = {
    username: '',
    email: ''
  }, action) {

  console.log("got to users reducer action.type", state)

  switch(action.type) {
    case "CREATE_USER":
     
     console.log("got to create user in reducer")
     
      return {
        ...state, 
      newUser: [ ...state.users, action.payload ]
      };

    default: 
      return state;  
  }
}

//not sure -- the return here is the new User to the database/api, right? 




// export default function reducer(state = {
//   isLoginPending: false,
//   isLoginSuccess: false,
//   loginError: null
// }, action) {
//   switch (action.type) {


//     case LOGIN_IS_SUCCESSFUL:
//       return {
//         ...state, 
//         isLoginSuccess: action.isLoginSuccess
//       };

//     case LOGIN_IS_PENDING:
//       return {
//         ...state, 
//         isLoginPending: action.isLoginPending
//       }


//     case LOGIN_HAS_AN_ERROR:
//       return { 
//         ...state, 
//         loginError: action.loginError
//       };

//     default:
//       return state;
//   }
// }