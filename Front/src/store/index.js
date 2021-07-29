import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import apiMiddleware from 'src/middlewares/api';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(apiMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
