import { combineReducers } from 'redux';
import entriesReducer from './entriesReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  entriesReducer, 
  usersReducer
});

