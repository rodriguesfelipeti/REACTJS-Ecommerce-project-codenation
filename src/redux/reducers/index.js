import { windowStateReducer } from './windowStatesReducer'
import { cartReducer } from './cartReducer'
import { productsApiReducer } from './productsApiReducer'
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  windowStateReducer: windowStateReducer,
  cartReducer : cartReducer, 
  productsApiReducer : productsApiReducer
});