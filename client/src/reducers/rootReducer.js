import { combineReducers } from 'redux';
import entriesReducer from './entriesReducer';
import usersReducer from './usersReducer';
import entryFormReducer from './entryFormReducer';

export default combineReducers({
  entriesReducer, 
  usersReducer,
  entryFormReducer
});

