import React from "react";
import "antd/dist/antd.css";
import { Provider as ReduxProvider } from "react-redux";
import store from "./state/store";
import { Home, Admin } from "./views";
import { PageNotFound, Cart } from "./components";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/admin" component={Admin} exact />
          <Route path="/cart" component={Cart} exact />
          <Route path="/page-not-found" component={PageNotFound} exact />
          <Redirect from="*" to="/page-not-found" />
        </Switch>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
