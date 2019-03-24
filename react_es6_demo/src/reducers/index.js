import {combineReducers} from 'redux';
import courses from './courseReducers';
import authors from './authorReducers';
import contact from './contactReducers';
import product from './productReducers';
import ajaxCallsInProgress from './ajaxStatusReducers';

const rootReducer = combineReducers({
  courses,
  authors,
  contact,
  product,
  ajaxCallsInProgress
});

export default rootReducer;
