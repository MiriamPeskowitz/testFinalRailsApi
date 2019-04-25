

//login 

// export const login(data) {
//   return dispatch => {
//     return fetch post-data to server
//   }
// }


// const base =  'http://localhost:3001/api/v1/users.json';

// user story: user can signup

// export const signUp = (user, cb) => {
//   let 
// }


// user story: user can login


// user story: user can make a new entry

//user story: user can edit an entry 

//user story:  user can delete an entry 

// Why do some devs use this: 
// const LOGIN_IS_PENDING = 'LOGIN_IS_PENDING';
// const LOGIN_IS_SUCCESSFUL = 'LOGIN_IS_SUCCESSFUL';
// const LOGIN_HAS_AN_ERROR = 'LOGIN_HAS_AN_ERROR';

// export const loginIsPending = (isLoginPending) => {
//   return {
//     type: 'LOGIN_IS_PENDING',
//     isLoginPending
//   };
// }

// export const loginIsSuccessful = (isLoginSuccess) => {
//   return {
//     type: 'LOGIN_IS_SUCCESSFUL',
//     isLoginSuccess
//   };
// }

// export const setLoginError = (loginError) => {
//   return {
//     type: 'LOGIN_HAS_AN_ERROR',
//     loginError
//   }
// }

// export const login http://localhost:3001/api/v1/users/user_id


// export const callLoginApi(email, password, callback) {
//   setTimeout(() => {
//     if (email=== 'admin@xample.com' && passsword === 'admin') {
//       return callback(null);
//     } else {
//       return callback(new Error('Invalid email and password'))
//     }
//   }, 1000);
// }

// export function login(email, password) {
//   return dispatch => {
//     dispatch(loginIsPending(true));
//     dispatch(loginIsSuccessful(false));
//     dispatch(setLoginError(null));


//     callLoginApi(email, password, error => {
//       dispatch(setLoginPending(false));
//       if (!error) {
//         dispatch(setLoginSuccess(true));
//       } else {
//         dispatch(setLoginError(error));
//       }
//     });
//   }
// }

