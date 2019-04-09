
//user story: any user can see all the entries (in batches of 10) 
const baseForEntries =  'http://localhost:3001/api/v1/entries.json';

export function fetchAllEntries() {
  return (dispatch) => {
    dispatch({
      type: 'LOADING_ENTRIES'
    });
    return fetch(baseForEntries)
    .then(response => response.json())
    .then(entries => dispatch({
      type: 'FETCH_ALL_ENTRIES', payload: entries.content
    }))
  }
}