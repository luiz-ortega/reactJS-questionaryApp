import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Questionary from '../pages/Questionary';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />

    <Route path="/questionary" component={Questionary} isPrivate />
  </Switch>
);

export default Routes;
