import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './components/signup/signup';
import LoginPage from './components/login/login';
import HomePage from './components/boards/Boards';

const Routes =() => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Signup}></Route>
        <Route exact path='/login' component={LoginPage}></Route>
        <Route path='/home' component={HomePage}></Route>
      </Switch>
    </Router>)
}

export default Routes;
