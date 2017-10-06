import React, {Component} from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Home from './../home';
import Dashboard from './../dashboard';
// import SideNav from './../side-nav';
import SearchBar from './search-bar';

import './../../styles/header.css';



class Header extends Component {

  render() {

    const state = this.props.appState;

      return (
        <div className="container main-container">
          <header id="header">
            <SearchBar state={state} setAppState={this.props.setAppState} />
            <h1 id="title">{state.header.text}</h1>
          </header>
            {/* <SideNav appState={state} setAppState={this.props.setAppState} naviconClass={state.sideNav.naviconClass} menuClass={state.sideNav.menuClass} /> */}
            <Route path='/' render={ props => (
              state.loggedin ? (
                <Redirect to='/dashboard' />
              ) :
              <Home appState={state} setAppState={this.props.setAppState} />
            )} exact/>
            <Route path='/dashboard' render={ props => (
              <Dashboard appState={state} setAppState={this.props.setAppState} />
            )} />
          <footer className="footer">
            <Link className="router-link" to="/">
              <i className="fa fa-home fa-2x" aria-hidden="true"></i>
            </Link>
            <Link className="router-link" to="/dashboard">
              <i className="fa fa-user-o fa-2x" aria-hidden="true"></i>
            </Link>
          </footer>
        </div>
      )
    }
};

export default Header
