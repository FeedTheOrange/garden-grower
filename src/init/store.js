import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createRouter from './router';
import reducers from '../reducers';

export default (preLoadedState) => {
  const {
    reducer, middleware, enhancer, thunk,
  } = createRouter;

  const composeEnhancers = (...args) => compose(...args);

  const rootReducer = combineReducers({ ...reducers, location: reducer });
  // todo apply middleware from index.jsx page
  const middlewares = applyMiddleware(middleware);
  const enhancers = composeEnhancers(enhancer, middlewares);
  const store = createStore(rootReducer, preLoadedState, enhancers);

  return { store, thunk };
};
