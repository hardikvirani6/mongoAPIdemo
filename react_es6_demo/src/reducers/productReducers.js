import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function contactReducers(state = initialState.product, action) {
  switch (action.type){
    case types.LOAD_PRODUCT_SUCCESS:
      return action.product;

    default:
      return state;
  }
}
