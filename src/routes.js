import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './components/signup/signup';
import Login from './components/login/login';

const Routes =() => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Signup}></Route>
        <Route exact path='/login' component={Login}></Route>
      </Switch>
    </Router>)
}

export default Routes;
