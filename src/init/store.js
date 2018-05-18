import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';

const combinedReducers = combineReducers({
  router: routerReducer,
});

const initState = {};

const configureStore = (middleware = []) =>
  createStore(combinedReducers, initState, applyMiddleware(...middleware));

export default configureStore;
