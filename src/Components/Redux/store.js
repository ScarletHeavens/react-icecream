import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers'
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));  
window.store = store;

export default store;