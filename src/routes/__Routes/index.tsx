import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ExampleExample from '../../containers/ExampleExample';
import Home from '../../containers/Home';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}
