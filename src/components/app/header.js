import React, {Component} from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import Home from './../home';
import Dashboard from './../dashboard';
// import SideNav from './../side-nav';
import SearchBar from './search-bar';
import SearchResults from './../search-results';
import BeerCard from './../beer-card';
// {(state.search.searchResults !== '') && <SearchResults appState={state}/>}

import './../../styles/header.css';



class Header extends Component {

  render() {


    const state = this.props.appState;

      return (
        <div className="container main-container">
          <header id="header">
            <SearchBar {...this.props} />
            <h1 id="title">{state.header.text}</h1>
          </header>
            {/* <SideNav appState={state} setAppState={this.props.setAppState} naviconClass={state.sideNav.naviconClass} menuClass={state.sideNav.menuClass} /> */}
            <Switch {...this.props}>
              <Route path='/' render={ props => (
                state.loggedin ? (
                  <Redirect to='/dashboard' />
                ) :
                <Home appState={state} setAppState={this.props.setAppState} />
              )} exact/>
              <Route path='/dashboard' render={ props => (
                <Dashboard appState={state} setAppState={this.props.setAppState} />
              )} />
              <Route path='/search/:query' render={ props => (
                <SearchResults {...this.props} />
              )} />
              {/* {(state.search.searchResults !== '') && <SearchResults appState={state}/>} */}
              <Route path='/beer/:id' render={ props => (
                <BeerCard {...props} appState={this.props.appState} setAppState={this.props.setAppState} />
              )} />
            </Switch>
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
