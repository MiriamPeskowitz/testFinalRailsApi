// Signin 

const url = "http://localhost:3001/api/v1/users"

export const createUser = user => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( user )
  }
 

  return dispatch => {
    fetch(url, data)
      .then(response => response.json())
      .then(newUser => dispatch({
        type: 'CREATE_USER',
        payload: newUser
      }))
    .catch(err => err)
  }
}

// Login should user be currentUser? 
export const loginUser = user => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( user )
  }
 

  return dispatch => {
    fetch(url, data)
      .then(response => response.json())
      .then(user => dispatch({
        type: 'LOGIN_USER',
        payload: user
      }))
    .catch(err => err)
  }
}

