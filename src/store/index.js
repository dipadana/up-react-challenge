import { createStore, applyMiddleware, combineReducers } from 'redux'
import { homeReducer, detailReducer } from './reducers'
import thunk from 'redux-thunk'; 
import { apiMiddleware } from './middleware/apiMiddleware'

let reducer = combineReducers({
  home: homeReducer,
  detail: detailReducer
})

let store = createStore(reducer, applyMiddleware(
  apiMiddleware,
  thunk
))

export default store