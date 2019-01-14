import { combineReducers } from 'redux'

import boardReducers from './boardReducers'

export default combineReducers({
  board: boardReducers,
})
