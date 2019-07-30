import React from 'react';

import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import HeaderBar from './HeaderBar';
import ChoresPage from './ChoresPage';
import PayoutsPage from './PayoutsPage';

const App = () => (
  <Router>
    <Switch>
      <Route path="/payouts">
        <HeaderBar isChangePersonButtonHidden={true} />
        <PayoutsPage />
      </Route>
      <Route path="/chores">
        <HeaderBar />
        <ChoresPage />
      </Route>
      <Redirect to="/payouts" />
    </Switch>
  </Router>
);

export default App;