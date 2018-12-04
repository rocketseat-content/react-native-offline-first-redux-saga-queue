import { createStore, applyMiddleware } from "redux";
import {
  offlineMiddleware,
  suspendSaga,
  consumeActionMiddleware
} from "redux-offline-queue";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./ducks";
import rootSaga from "./sagas";

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(offlineMiddleware());
middlewares.push(suspendSaga(sagaMiddleware));
middlewares.push(consumeActionMiddleware());

const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;

const store = createAppropriateStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);

export default store;
