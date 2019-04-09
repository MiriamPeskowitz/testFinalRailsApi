import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import entriesReducer from './entriesReducer';

export default combineReducers({
  simpleReducer,
  entriesReducer
});

