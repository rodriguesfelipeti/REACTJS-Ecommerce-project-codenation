import { CLICK_GET_PRODUCTS_API } from '../actions/actionTypes';
import { defineState } from 'redux-localstore'

const defaultState = {
  catalog: null
}

const initialState = defineState(defaultState)('productsApiReducer')

export const productsApiReducer = (state = initialState, action) => {

  switch (action.type) {
    case CLICK_GET_PRODUCTS_API:
      return {
        ...state,
        catalog: action.catalog
        
      };
    default:
      return state;
  }
};  