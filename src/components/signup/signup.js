import React, { Component } from 'react';
import Axios from 'axios';
import './signup.css';

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      diableSignupButton: true,
      user: {
        username: '',
        email: '',
        password: ''
      }
    }
  }

  render() {
    return (
      <div id="signup-form">
        <h2 className="title is-2">Create and account</h2>
        <form onSubmit={this.signup}>
          <div className="field">
            <label className="label is-medium">Username</label>
            <div className="control">
              <input className="input is-medium" name='username' onChange={this.inputsChange} type="text" placeholder="e.g., Jhon Snow"/>
            </div>
          </div>
          <div className="field">
            <label className="label is-medium">Email</label>
            <div className="control has-icons-left">
              <input className="input is-medium" name='email' onChange={this.inputsChange} type="email" placeholder="e.g., jhon.snow@win.wes"/>
              <span className="icon is-small is-left">
                <i className="fa fa-envelope"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label is-medium">Password</label>
            <div className="control has-icons-left">
              <input className="input is-medium" name='password' onChange={this.inputsChange} type="password" placeholder="e.g., *****"/>
              <span className="icon is-small is-left">
                <i className="fa fa-lock"></i>
              </span>
            </div>
          </div>
          <input type="submit" value='Create Account' disabled={this.state.diableSignupButton} className='button is-primary'/>
        </form>
        <p>Already have an account? <a href="/login">Log in</a></p>
      </div>
    );
  }

  signup = (e) => {
    e.preventDefault();
    Axios.post('http://127.0.0.1:3333/users', this.state.user, {
      headers: {'Access-Control-Allow-Origin': '*'},
    })
      .then(res => {
        this.props.history.push('/login');
      })
      .catch(error => {

      })
  }

  inputsChange = (e) => {
    let user = this.state.user;
    user[e.target.name] = e.target.value;
    let validUser = Object.values(user).every(value => value.length > 0)
    this.setState({user, diableSignupButton: validUser ? false : 'disabled'});
  }
}

export default Signup;
