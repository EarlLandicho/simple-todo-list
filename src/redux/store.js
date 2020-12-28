import logger from 'redux-logger'
import {applyMiddleware, createStore} from 'redux'
import listReducer from './list.reducer'

const middlewares = [logger]

const store = createStore(listReducer, applyMiddleware(...middlewares))

export default store