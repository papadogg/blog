import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as authActions from '../actions/auth';


class Login extends Component {
  
  state = {
    name: '',
    password: ''
  }
  
  componentDidMount() {
    if(this.props.auth.loginError) {
        this.props.authActions.loginErrorClear();
    }
  }
  
  login = (e) => {
    e.preventDefault();
    const { name, password } = this.state;
    const userInfo = {
      name,
      password
    };
    this.props.authActions.login(userInfo);
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
    if(this.props.auth.loginError) {
      this.props.authActions.loginErrorClear();
    }
  }
  
  renderLoginForm() {
    return (
      <div>
          <div className="flash-wrapper">
          { this.props.auth.loginError && <div className="alert alert-danger" role="alert">Name or password is incorrect</div> }
          </div>
          <form className="form-signin" onSubmit={this.login}>
              <h2 className="form-signin-heading">Login</h2>
              <label htmlFor="inputEmail" className="sr-only">Email address</label>
              <input type="text" className="form-control" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} required autoFocus/>
              <label htmlFor="inputPassword" className="sr-only">Password</label>
              <input type="password" className="form-control" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} required/>
              <button className="btn btn-primary btn-block" type="submit">Sign in</button>
          </form>
      </div>
    );
  }
  
  render() {
    if(this.props.auth.authenticated) {
        return <Redirect to="/"/>;
    }
    return (
      <div>
        {this.renderLoginForm()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
