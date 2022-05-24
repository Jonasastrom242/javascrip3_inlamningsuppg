import { combineReducers } from 'redux'
import eventReducer from './eventReducer'
import singleEventReducer from './singleEventReducer'
import cartReducer from './cartReducer'
import authReducer from './authReducer'


export default combineReducers({
  eventReducer,
  singleEventReducer,
  cartReducer,
  authReducer
})