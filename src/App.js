import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" />
        <Route path="/users" />
        <Route path="/settings" />
        <Route path="/sign-out" />
      </Switch>
    </Fragment>
  );
}

export default App;
