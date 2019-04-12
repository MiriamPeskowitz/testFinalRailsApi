export const createEntry = entry => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ entry });
  }

  return dispatch = {
    fetch('http://localhost:3005/api/v1/entries', data)
      .then(response => response.json())
      .then(todo => dispatch({
        type: 'CREATE_ENTRY',
        payload: entry
    }))
    .catch(err => err)
  }
}