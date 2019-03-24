import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import { makeAPIRequest } from "../components/common/apiHelper";

export default { loadContact, loadContactSuccess, getByIdContact, getByIdContactSuccess,
  savecontacts, createContactSuccess, updateContact, updateContactSuccess,
  deleteContactSuccess, deleteContact}

export function loadContactSuccess (contact){
  return { type: types.LOAD_CONTACT_SUCCESS ,contact };
}

export function createContactSuccess(contact) {
  return {type: types.CREATE_CONTACT_SUCCESS ,contact };
}

export function getByIdContactSuccess(updatedContact) {
     debugger;
  return {type: types.GET_BY_ID_CONTACT_SUCCESS, updatedContact };
}

export function updateContactSuccess(contact) {
  return {type: types.UPDATE_CONTACT_SUCCESS ,contact };
}

export function deleteContactSuccess(contact) {
  return {type: types.DELETE_CONTACT_SUCCESS ,contact };
}

export function loadContact() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return makeAPIRequest({ path: 'emp'}).then(contact => {
      dispatch(loadContactSuccess(contact));
    }).catch(error => {
      throw(error);
    });
  };
}

export function savecontacts(name,designation,salary) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return makeAPIRequest({ path: 'emp', method: 'POST',
      body: {'name':name,
            'designation':designation,
            'salary':salary}
    }).then(contact => {
        dispatch(createContactSuccess(contact));
    }).catch(error =>{
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}

export function deleteContact(id) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return makeAPIRequest({ path: 'emp', method: 'DELETE', body: {_id: id}}).then(contact => {
      alert(`Deleted ${id}`);
      dispatch(deleteContactSuccess(contact));
    }).catch(error => {
      throw(error);
    });
  };
}

export function getByIdContact(id) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return makeAPIRequest({ path: 'emp/fetch', method: 'POST', body: {_id: id}}).then(contact => {
      dispatch(getByIdContactSuccess(contact));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateContact(id, name, designation, salary) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return makeAPIRequest({ path: 'emp', method: 'PUT',
      body: {'_id': id,
        'name':name,
        'designation':designation,
        'salary':salary}
    }).then(contact => {
      dispatch(updateContactSuccess(contact));
    }).catch(error =>{
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}

