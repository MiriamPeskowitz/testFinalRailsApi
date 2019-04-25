const url = "http://localhost:3001/api/v1/entries"

export const createEntry = entry => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( entry )
  }
  console.log("got to dispatch")
  
  return dispatch => {
    fetch(url, data)
      .then(response => response.json())
      .then(ent => dispatch({
        type: 'CREATE_ENTRY',
        payload: ent
      }))
    .catch(err => err)
  }
}