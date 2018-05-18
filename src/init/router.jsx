import React from 'react';
import { Switch, Route } from 'react-router-dom';

const PlaceholderPage = (<div>Placeholder</div>);

const Router = () => (
  <Switch>
    <Route path="/" component={PlaceholderPage} />
  </Switch>
);

export default Router;
