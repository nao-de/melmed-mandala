import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/reducers'

let store = createStore(rootReducer);

export default store;
