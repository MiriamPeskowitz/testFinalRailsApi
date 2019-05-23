import { combineReducers } from 'redux';
import entriesReducer from './entriesReducer';
import userReducer from './usersReducer';

 const rootReducer = combineReducers({
  entriesReducer, 
  userReducer
});

export default rootReducer