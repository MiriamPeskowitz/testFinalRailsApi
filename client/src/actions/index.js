import history from '../history';
//user story: any user can see all the entries (in batches of 10) 
//FETCH ENTRIES

export const FETCH_ALL_ENTRIES = 'FETCH_ALL_ENTRIES';
export const CREATE_ENTRY ='CREATE_ENTRY';
export const DELETE_ENTRY ='DELETE_ENTRY';
export const EDIT_ENTRY = 'EDIT_ENTRY';
// export const FETCH_ENTRY = 'FETCH_ENTRY';
// export const RECEIVE_ENTRY = 'RECEIVE_ENTRY'

const url = "http://localhost:3001/api/v1/entries";

export const fetchAllEntries = () => {
  const data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  return (dispatch) => { 
    fetch(url, data)
    .then(response => response.json())
    .then(entries => 
      dispatch({
        type: FETCH_ALL_ENTRIES, 
        payload: entries
      })
    )
    .catch(err => err);
  };  
};


// .then(response => response.json())
//       .then(entries =>  dispatch {
//         type: RECEIVE_ENTRIES, 
//          entries: response.data
//       })
//CREATE NEW ENTRY
export const createEntry = ({title, content}) => {
  let newEntry = {title, content}
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({newEntry})
  }
  console.log("ENTRYFORM actions:",newEntry)
  
  return dispatch => {
    fetch(url, data)
      // .then(console.log(data))
      .then(response =>  {
        let data = response.data 
        // response.json())
      // 
        dispatch({
        type: CREATE_ENTRY,
        payload: {id:data.id, title:data.title, content: data.content} })
        })
        .then(() => {
          history.push("/articles")
        })
      .catch(err => err);
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
    .then(deletedEntry => 
        dispatch({
          type: DELETE_ENTRY,
          payload: deletedEntry
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
          type: EDIT_ENTRY,
          payload: entry
      }))
    .then(console.log("got past the edit-Entry dispatch. editEntry:", entry)) 
    .catch(err => err) 
  }
}

