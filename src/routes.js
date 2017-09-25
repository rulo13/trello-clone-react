import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './components/signup/signup';
import Login from './components/login/login';
import Boards from './components/boards/Boards';

const Routes =() => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Signup}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route path='/home' component={Boards}></Route>
      </Switch>
    </Router>)
}

export default Routes;
