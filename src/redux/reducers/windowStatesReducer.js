import { CLICK_SUPPORT_WINDOWS, STORE_SELECTED_SINGLE_PRODUCT } from '../actions/actionTypes';
import { defineState } from 'redux-localstore'

const defaultState = {
    supportWindow: false,
    seletedSingleProduct: false
};
const initialState = defineState(defaultState)('windowStateReducer')
export const windowStateReducer = (state = initialState, action) => {

  switch (action.type) {
    case CLICK_SUPPORT_WINDOWS:
      return {
        ...state,
        supportWindow: action.supportWindow
      }
    case STORE_SELECTED_SINGLE_PRODUCT:
      return {
        ...state,
        seletedSingleProduct: action.item 
      }
    default:
      return state;
  }
};