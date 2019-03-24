import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import { makeAPIRequest } from "../components/common/apiHelper";

export  function loadProductSuccess (product){
  return { type: types.LOAD_PRODUCT_SUCCESS ,product };
}

export function loadProduct() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return makeAPIRequest({ path: 'product'}).then(product => {
      dispatch(loadProductSuccess(product));
    }).catch(error => {
      throw(error);
    });
  };
}

