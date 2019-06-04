import { combineReducers } from 'redux';
import entries from './entriesReducer';
// import users from './usersReducer';

 const rootReducer = combineReducers({
  entries
  // users: users
});

export default rootReducer