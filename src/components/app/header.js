import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './../home';
import About from './../about';
// import SideNav from './../side-nav';
import SearchBar from './../search-bar';

import './../../styles/header.css';



class Header extends Component {

  render() {

    const state = this.props.appState;

      return (
        <div className="container main-container">
          <header id="header">
            <SearchBar state={state} setAppState={this.props.setAppState} />
            <h1 id="title">Beer Fridge</h1>
          </header>
            {/* <SideNav appState={state} setAppState={this.props.setAppState} naviconClass={state.sideNav.naviconClass} menuClass={state.sideNav.menuClass} /> */}
            <Route path='/' render={ props =>(
              <Home appState={state} setAppState={this.props.setAppState} />
            )} exact/>
            <Route path='/about' render={ props => (
              <About appState={state} />
            )} />
          <footer className="footer">
            <Link className="router-link" to="/">
              <i className="fa fa-home fa-2x" aria-hidden="true"></i>
            </Link>
            <Link className="router-link" to="/about">
              <i className="fa fa-user-o fa-2x" aria-hidden="true"></i>
            </Link>
          </footer>
        </div>
      )
    }
};

export default Header
