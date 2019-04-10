
//user story: any user can see all the entries (in batches of 10) 
const url =  'http://localhost:3001/api/v1/entries.json';

export const fetchAllEntries = () => {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  return (dispatch) => {

    dispatch({
      type: 'LOADING_ENTRIES'
    });

    fetch(url, data)
    .then(response => response.json())
    .then(entries => dispatch({
        type: 'FETCH_ALL_ENTRIES', 
        payload: entries
    }))
    .catch(err => err)
  }
}