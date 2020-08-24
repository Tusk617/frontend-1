import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import authReducer from './authReducer'

export default combineReducers({ todo: todoReducer, auth: authReducer})
