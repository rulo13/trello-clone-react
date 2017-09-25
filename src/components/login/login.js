import React, { Component } from 'react';
import Axios from 'axios';
import './login.css';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      diableLoginButton: true,
      user: {
        email: '',
        password: ''
      }
    }
  }

  render() {
    return (
      <div id='login-form'>
        <h2 className="title is-2">Log in to ...</h2>
        <form onSubmit={this.login}>
          <div className="field">
            <label className="label is-medium">Email</label>
            <div className="control has-icons-left">
              <input className="input is-medium" name='email'
                onChange={this.inputsChange} type="email" placeholder="e.g., jhon.snow@win.wes"/>
              <span className="icon is-small is-left">
                <i className="fa fa-envelope"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label is-medium">Password</label>
            <div className="control has-icons-left">
              <input className="input is-medium" name='password'
                onChange={this.inputsChange} type="password" placeholder="e.g., *****"/>
              <span className="icon is-small is-left">
                <i className="fa fa-lock"></i>
              </span>
            </div>
          </div>
          <input type="submit" value='Login'
            disabled={this.state.diableLoginButton} className='button is-primary'/>
          <p>Don't have an account? <a href="/">Create Account</a></p>
        </form>
      </div>
    );
  }

  login = (e) => {
    e.preventDefault();
    Axios.post('http://127.0.0.1:3333/login', this.state.user, {
      headers: {'Access-Control-Allow-Origin': '*'},
    })
      .then(res => {
        this.saveTokenToLocalStorage(res.data.token);
      })
      .catch(error => {
        console.log(error);
      })
  }

  saveTokenToLocalStorage(token) {
    localStorage.setItem('token', token);
  }

  inputsChange = (e) => {
    let user = this.state.user;
    user[e.target.name] = e.target.value;
    let validUser = Object.values(user).every(value => value.length > 0)
    this.setState({user, diableLoginButton: validUser ? false : 'disabled'});
  }
}

export default Login;
