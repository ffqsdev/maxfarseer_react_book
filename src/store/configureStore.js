import {createStore, applyMiddleware} from 'redux'
import {rootReducer} from '../reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
// import {dymmyLogger} from './enhancers/dymmyLogger'


export const store = createStore(rootReducer, applyMiddleware(thunk, logger))
