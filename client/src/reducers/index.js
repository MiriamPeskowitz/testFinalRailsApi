import { combineReducers } from 'redux';
import entriesReducer from './entriesReducer';
import usersReducer from './usersReducer';
import entryFormReducer from './entryFormReducer';

 const rootReducer = combineReducers({
  entriesReducer, 
  entryFormReducer,
  usersReducer,
});

export default rootReducer