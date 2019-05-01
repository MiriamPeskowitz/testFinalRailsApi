import { combineReducers } from 'redux';
import entriesReducer from './entriesReducer';
import userReducer from './usersReducer';
import entryFormReducer from './entryFormReducer';

 const rootReducer = combineReducers({
  entriesReducer, 
  entryFormReducer,
  userReducer,
});

export default rootReducer