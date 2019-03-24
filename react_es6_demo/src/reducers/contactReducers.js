import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function contactReducers(state = initialState.contact, action) {
  switch (action.type){

    case types.LOAD_CONTACT_SUCCESS:
      return action.contact;

    case types.CREATE_CONTACT_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.contact)
      ];

    case types.GET_BY_ID_CONTACT_SUCCESS:
      return [
        ...state.filter(contact => contact._id != action.contact._id),
        Object.assign({}, action.contact)
      ];

    case types.UPDATE_CONTACT_SUCCESS:
      return [
        ...state.filter(contact => {
             debugger;
                  contact._id != action.contact._id
        }),
        Object.assign({}, action.contact)
      ];

    case types.DELETE_CONTACT_SUCCESS:
      return [
        ...state.filter(contact => contact._id != action.contact._id),
        Object.assign({}, action.contact)
      ];

    default:
      return state;
  }
}
