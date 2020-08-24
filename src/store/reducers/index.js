import { combineReducers } from 'react-redux'
import { todoReducer } from './todoReducer'
export { authReducer } from './authReducer'

const rootReducer = combineReducers({ todo: todoReducer, auth: authReducer})

export default rootReducer