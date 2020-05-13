import { CLICK_ADD_PRODUCT_TO_CART, INCREMENT_CART, DECREMENT_CART, CLICK_REMOVE_PRODUCT } from '../actions/actionTypes';
import {defineState} from 'redux-localstore'

const defaultState = {
  cart: [],
  totalCart: 0
}



const initialState = defineState(defaultState)('cartReducer')

export const cartReducer = (state = initialState, action) => {

  switch (action.type) {

    case CLICK_ADD_PRODUCT_TO_CART:
      
      let actualPrice = action.cart.actual_price.replace('R$', '').replace(',','.')
      state.totalCart = parseFloat(state.totalCart) + parseFloat(actualPrice)
      if(action.index !== false) {

        state.cart[action.index].qtd++ 
        return {
          ...state,
          cart: [...state.cart],
        }
      }else {

        return {
          ...state,
          cart: [...state.cart, action.cart],
        }
      
      };
      
    case INCREMENT_CART:
      console.log(state.totalCart)
      state.cart[action.index].qtd++
      state.totalCart += parseFloat(state.cart[action.index].actual_price.replace('R$', '').replace(',','.'))
      
      return {
        ...state,
        cart: [...state.cart ]
      }
      case DECREMENT_CART: 
      
      if(state.cart[action.index].qtd === 1){
        state.totalCart = 0 
      } 
      else {
        state.cart[action.index].qtd--
        state.totalCart -= parseFloat(state.cart[action.index].actual_price.replace('R$', '').replace(',','.'))
        return {
          ...state,
          cart: [...state.cart ]
        }
      }
    // eslint-disable-next-line no-fallthrough
    case CLICK_REMOVE_PRODUCT: 
      return {
        ...state,
        cart: state.cart.filter((_item, index) => index !== action.index)
      }
    default:
      return state;
  }
};  