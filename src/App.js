import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Dashboard from "./components/Analytics/Dashboard";

import EmployeeList from "./components/CVBank/EmployeeList";

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/cv-bank" component={EmployeeList} />
        <Route path="/recruitment" />
        <Route path="/appraisal" />

        <Route path="/attendance" />
        <Route path="/exit-process" />

        <Route path="/learning-training" />
        <Route path="/succession-planning" />
        <Route path="/csr" />

        <Route path="/users" />
        <Route path="/settings" />
        <Route path="/sign-out" />

        <Route path="/" component={Dashboard} />
        <Route path="/" />
      </Switch>
    </Fragment>
  );
}

export default App;