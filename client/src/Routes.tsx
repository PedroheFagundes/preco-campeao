import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Deals from "./pages/Deals";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Registration from "./pages/Registration";
import Simulation from "./pages/Simulation";
import Variation from "./pages/Variation";

const App = function () {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/variation">
        <Variation />
      </Route>
      <Route exact path="/deals">
        <Deals />
      </Route>
      <Route exact path="/simulation">
        <Simulation />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/registration">
        <Registration />
      </Route>
      <Route>
        <Redirect to="/" />
        <Home />
      </Route>
    </Switch>
  );
};

export default App;
