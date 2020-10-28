import React from 'react';
import { Switch } from 'react-router-dom';
import { QuestionaryProvider } from '../hooks/questionary';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Questionary from '../pages/Questionary';
import Results from '../pages/Results';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />

    <QuestionaryProvider>
      <Route path="/questionary" component={Questionary} isPrivate />
      <Route path="/results" component={Results} isPrivate />
    </QuestionaryProvider>
  </Switch>
);

export default Routes;
