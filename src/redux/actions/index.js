import { CLICK_SUPPORT_WINDOWS, 
         CLICK_ADD_PRODUCT_TO_CART, 
         CLICK_GET_PRODUCTS_API, 
         INCREMENT_CART, 
         CLICK_REMOVE_PRODUCT, 
         DECREMENT_CART,
         STORE_SELECTED_SINGLE_PRODUCT } from './actionTypes';

export const windowStateReducer = value => ({
  type: CLICK_SUPPORT_WINDOWS,
  supportWindow: value
})

export const cartReducer = (item, index) => ({
  type: CLICK_ADD_PRODUCT_TO_CART,
  cart: item,
  index: index
})

export const incrementCart = index => ({
  type: INCREMENT_CART,
  index: index
})

export const decrementCart = index => ({
  type: DECREMENT_CART,
  index: index
})

export const removeItemCart = index => ({
  type: CLICK_REMOVE_PRODUCT,
  index: index
})

export const productsApiReducer = items => ({
  type: CLICK_GET_PRODUCTS_API,
  catalog: items
})

export const storeSelectedSingleProduct = item => ({
  type: STORE_SELECTED_SINGLE_PRODUCT,
  item: item
})