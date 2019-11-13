import { applyMiddleware, createStore, Middleware, StoreEnhancer } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer, { exampleInitialState } from './reducer';
import rootSaga from './saga';
import { NextReduxSagaStore } from './interfaces';

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function configureStore(initialState = exampleInitialState): NextReduxSagaStore {
  const sagaMiddleware = createSagaMiddleware();
  const store: NextReduxSagaStore = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware]),
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
