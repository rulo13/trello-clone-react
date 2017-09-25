import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './components/signup/signup';

const Routes =() => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Signup}></Route>
      </Switch>
    </Router>)
}

export default Routes;
