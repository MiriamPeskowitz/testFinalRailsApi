
//user story: any user can see all the entries (in batches of 10) 
//FETCH ENTRIES
const url = 'http://localhost:3000/api/v1/entries';

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

//CREATE NEW ENTRY
export const createEntry = newEntry => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( newEntry )
  }
  console.log("ENTRYFORM actions:",newEntry)
  
  return dispatch => {
    fetch(url, data)
      .then(console.log(data))
      .then(response => response.json())
      // 
      .then(newEntry => {
        dispatch({
        type: 'CREATE_ENTRY',
        payload: newEntry
        })
      })
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
    fetch(`${ url }/${entry}`, data)
    // .then(console.log("got past fetch. entry.id:", entry))
    // .then(console.log("url:", `${url}/${entry}`))
    // .then(response => response.json())
    // .then(console.log("got past response.json"))
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



