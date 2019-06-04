import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import logger from 'redux-logger';
// import { fetchAllEntries } from './actions'

const store = createStore(
   rootReducer, 
    compose(applyMiddleware(thunk, logger), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
 );

// store.dispatch(fetchAllEntries);

export default store;
