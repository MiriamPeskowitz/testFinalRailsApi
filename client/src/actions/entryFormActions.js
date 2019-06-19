const url = "http://localhost:3000/api/v1/entries"

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
// Thunk syntax
// export function fetchCats() {
//   return (dispatch) => {
//     dispatch({ type: 'START_ADDING_CATS_REQUEST' });
//     return fetch('http://www.catapi.com')
//       .then(response => response.json())
//       .then(cats => dispatch({ type: 'ADD_CATS', cats }));
//   };
// }

//tell Annabel -- the problem was ent, payload: ent. It had to be the same newEntry, throughout, since this is senidng to the db.