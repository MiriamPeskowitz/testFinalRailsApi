
//user story: any user can see all the entries (in batches of 10) 
//FETCH ENTRIES

// const baseUrl = 'http://localhost:3001/api/v1'
const url = 'http://localhost:3001/api/v1/entries';

export function fetchAllEntries(){
  const data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  return dispatch => {
    // dispatch({
    //   type: 'LOADING_ENTRIES',
    //   payload: true
    // });

    return fetch(url, data)
    .then(response => response.json())
    .then(entries =>  dispatch({
        type: 'FETCH_ALL_ENTRIES', 
        payload: entries
    }))
    .catch(err => err)
  }  
}

//DELETE ENTRY 
export const deleteEntry = (entry) => {
  const data = {
    method: "DELETE",
    mode: "cors",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    // },
    //  body: JSON.stringify(data),
  }

  console.log("entry:", entry)

  return dispatch => {
    // fetch(`${baseUrl}/entries/${entry}`, data)
    fetch(`${ url }/${entry}`, data)
    .then(console.log("got past fetch. entry.id:", entry))
    .then(console.log("url:", `${url}/${entry}`))
    .then(response => response.json())
    .then(console.log("got past response.json"))
    .then(entry => 
        dispatch({
          type: "DELETE_ENTRY",
          payload: entry
      }))
    // .then(entries =>  
    //   dispatch({
    //     type: 'FETCH_ALL_ENTRIES', 
    //     payload: entries
    // }))

    // .then(console.log("got past the dispatch. deletedEntry:", payload)) 
    // -- works, I can see the proper payload 
    .catch(err => err) 
  }
}

//UPDATE ENTRY 
export const editEntry = (entry) => {
  const data = {
    method: "PATCH",
    mode: "no-cors",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    // },
    //  body: JSON.stringify(data),
  }

  console.log("entry:", entry)

  return dispatch => {
    // fetch(`${baseUrl}/entries/${entry}`, data)
    fetch(`${ url }/${entry}`, data)
    .then(console.log("got past edit fetch. entry.id:", entry))
    .then(console.log("url:", `${url}/${entry}`))
    .then(response => response.json())
    .then(console.log("got past edit response.json"))
    .then(entry => 
        dispatch({
          type: "EDIT_ENTRY",
          payload: entry
      }))
    .then(console.log("got past the edit-Entry dispatch. editEntry:", entry)) 
    .catch(err => err) 
  }
}

// sample code: 
// const ADD_TODO = 'ADD_TODO'
// const REMOVE_TODO = 'REMOVE_TODO'
// const UPDATE_TODO = 'UPDATE_TODO'

// const addEntry = (entry) => ({
//   type: ADD_TODO, 
//   text
// })
// const removeEntry = (id) => ({
//   type: REMOVE_ENTRY,
//   id
// })

// const updateEntry = (id, text) => ({
//   type: UPDATE_TODO,
//   id,
//   text
// })}

 // console.log("got past the dispatch. deletedEntry:", entry) 
//then have to rerender page... 
//debug: it's catching the entry.id #. what should happen next -- does it get to reducer? 
//checked the api in console; delete IS working, could delete id:1 from there. so if it isn't backend, and the action isn't getting to th reducer. DID THIS: changed Delete to destroy, so it matched. That should have worked NEXT: when i press delete button, there's no response in my terminal. So, it's not getting there. Why? 


// //EDIT/UPDATE ENTRY 
// export const editEntry = (entry) => {
//   const data = {
//     method: 'PUT',
//     mode: "no-cors",
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   }
//   const baseUrl = 'http://localhost:3001/api/v1'
//   return dispatch => {
//     fetch(`${ baseUrl }/entries/${ entry.id }`, data)
//     .then(console.log("got past edit entries fetch"))
//     .then(response => response.json())
//     .then(entry => dispatch({
//       type: 'EDIT_ENTRY',
//       payload: entry
//     }))  
//     .catch(err => err) 
//  }
// }

