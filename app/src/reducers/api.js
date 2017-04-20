// create our API reducer to manage the state that we get back from an API
const initialState = {
  data: []
}

const apiReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'RECIEVE_DATA':
      return {
        ...state,
        data: action.data
      }
      
    default:
      return state
  }
}

export default apiReducer
