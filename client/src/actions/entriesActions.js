
//user story: any user can see all the entries (in batches of 10) 
//FETCH ENTRIES

export function fetchAllEntries(){
  const data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  const url = 'http://localhost:3001/api/v1/entries.id';
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
    method: 'DELETE',
    mode: "no-cors",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  const baseUrl = 'http://localhost:3001/api/v1'
  return dispatch => {
    fetch(`${ baseUrl }/entries/${ entry.id }`, data)
    .then(console.log("got past fetch"))
    .then(response => response.json())
    .then(entry => dispatch({
      type: 'DELETE_ENTRY',
      payload: entry
    }))  
    .catch(err => err) 
 }
}
//then have to rerender page... 


//EDIT/UPDATE ENTRY 
export const editEntry = (entry) => {
  const data = {
    method: 'PUT',
    mode: "no-cors",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  const baseUrl = 'http://localhost:3001/api/v1'
  return dispatch => {
    fetch(`${ baseUrl }/entries/${ entry.id }`, data)
    .then(console.log("got past edit entries fetch"))
    .then(response => response.json())
    .then(entry => dispatch({
      type: 'EDIT_ENTRY',
      payload: entry
    }))  
    .catch(err => err) 
 }
}