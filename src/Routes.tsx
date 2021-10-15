import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import PricesChange from './pages/PricesChange';
import SuperDeals from './pages/SuperDeals';
import Simulation from './pages/Simulation';
import Profile from './pages/Profile';

export default function () {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/prices-change'>
        <PricesChange />
      </Route>
      <Route exact path='/super-deals'>
        <SuperDeals />
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