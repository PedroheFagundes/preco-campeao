import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import Variation from './pages/Variation';
import Deals from './pages/Deals';
import Simulation from './pages/Simulation';
import Profile from './pages/Profile';

export default function () {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/variation'>
        <Variation />
      </Route>
      <Route exact path='/deals'>
        <Deals />
      </Route>
      <Route exact path='/simulation'>
        <Simulation />
      </Route>
      <Route exact path='/profile'>
        <Profile />
      </Route>
      <Route exact path='/signin'>
        <SignIn />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}