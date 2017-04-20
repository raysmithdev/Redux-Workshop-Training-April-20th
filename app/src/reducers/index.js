// create a rootReducer to combine our reducers for out App

import { combineReducers } from 'redux'
import apiReducer from './api'

const rootReducer = combineReducers({
  apiReducer
})

export default rootReducer
