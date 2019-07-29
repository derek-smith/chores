import React from 'react';

import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import HeaderBar from './HeaderBar';
import ChoresPage from './ChoresPage';
import PayoutsPage from './PayoutsPage';

const App = () => (
  <Router>
    <HeaderBar />
    <Switch>
      <Route path="/payouts" component={PayoutsPage} />
      <Route path="/chores" component={ChoresPage} />
      <Redirect to="/payouts" />
    </Switch>
  </Router>
);

export default App;