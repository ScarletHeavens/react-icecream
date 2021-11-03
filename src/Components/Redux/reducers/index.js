import {combineReducers} from 'redux';
import filters from '../reducers/filterReducer';
import items from '../reducers/itemReducer';
import cart from '../reducers/cartReducer';


let reducers = combineReducers({
filters,
items,
cart,
});

export default reducers;