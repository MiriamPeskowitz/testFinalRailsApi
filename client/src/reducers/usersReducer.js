// // import { userActions } from './actions/userActions';

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