import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch , HashRouter} from "react-router-dom";
import App from "./index";
import { Provider } from "react-redux";
import CreateTenant from "./containers/CreateTenant";
import Home from './containers/Home';
import store from './store';
import main from './main';
const Routes = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/create-tenant" component={main} />
      </Switch>
    </Router>
  </Provider>
);

export default Routes;
