import { combineReducers } from 'redux'
import players from './players'

const tennisApp = combineReducers({
  players,
})

export default tennisApp
