
//user story: any user can see all the entries (in batches of 10) 

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