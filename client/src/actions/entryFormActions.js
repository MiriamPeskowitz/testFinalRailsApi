const url = "http://localhost:3001/api/v1/entries"

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
      .then(newEntry => {
        dispatch({
        type: 'CREATE_ENTRY',
        payload: newEntry
        })
      })
      .catch(err => err)
    }
}
//tell Annabelle -- the problem was ent, payload: ent. It had to be the same newEntry, throughout, since this is senidng to the db.