import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./index";
import { logger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import CreateTenant from "./containers/CreateTenant";
import rootSaga from "./sagas/index";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

const Routes = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/create-tenant" component={CreateTenant} />
      </Switch>
    </Router>
  </Provider>
);

export default Routes;
