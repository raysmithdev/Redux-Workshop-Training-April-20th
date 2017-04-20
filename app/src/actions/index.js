// SYNC ACTIONS
const RECIEVE_DATA = 'RECIEVE_DATA'
const recieveData = (data) => ({
  type: RECIEVE_DATA,
  data
})

// ASYNC ACTION
export const fetchData = () => {
  return dispatch => {
    fetch('https://api.punkapi.com/v2/beers')
    .then(response => response.json())
    .then(data => dispatch(recieveData(data)))
    .catch(err => console.log(err))
  }
}
