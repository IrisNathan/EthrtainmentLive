import React from 'react';
import { BrowerRouter as Router, Switch, Route } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import { Viewer, Streamer } from './pages';
import { Home } from './pages/home';

export default function Routes() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route exact path={ROUTES.STREAMER}>
          <Streamer />
        </Route>
        <Route exact path={ROUTES.VIEWER}>
          <Viewer />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

