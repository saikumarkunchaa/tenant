import React from "react";
import { logger } from "redux-logger";
import { createStore, applyMiddleware,combineReducers,compose } from "redux";
import rootSaga from "./sagas/index";
import reducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import { reducer as reduxFormReducer } from 'redux-form';


const reducers = combineReducers({
    form: reduxFormReducer,
    reducer // mounted under "form"
  });


   const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&  window.__REDUX_DEVTOOLS_EXTENSION__();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, compose(applyMiddleware(sagaMiddleware),reduxDevTools));
sagaMiddleware.run(rootSaga);

export default store;