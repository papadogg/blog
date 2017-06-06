import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as authActions from '../actions/auth';


class Header extends Component {
  
  logout = (e) => {
    e.preventDefault();
    this.props.authActions.logout();
  }
  
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
           <Link to="/" className="navbar-brand">Blog</Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li>{ !this.props.auth.authenticated ? <Link className="nav-link" to="/login">Login</Link> : <p className="navbar-text">Hello, {this.props.auth.user}</p> }</li>
              <li>{ this.props.auth.authenticated ? <a className="nav-link" onClick={this.logout} href="">Logout</a> : null }</li>
            </ul>
          </div>
        </div>
      </nav>
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
)(Header);
