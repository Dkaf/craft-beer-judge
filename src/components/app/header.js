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
          {state.loading ? <div className="loading-container">
            <i className="loading-icon fa fa-circle-o-notch fa-spin fa-3x fa-fw" aria-hidden="true"></i>
          </div> : null}
          <Route path='/' render={ props => (
                <Home {...this.props} />
              )} exact/>
            {/* <SideNav appState={state} setAppState={this.props.setAppState} naviconClass={state.sideNav.naviconClass} menuClass={state.sideNav.menuClass} /> */}
            <Switch {...this.props}>
              <Route path='/dashboard' render={ props => (
                  state.loggedIn ? (
                  <Dashboard {...props} appState={state} setAppState={this.props.setAppState} />
                ) : (
                   <Redirect to='/' />
                )
              )} />
              <Route path='/search/:query' render={ props => (
                <SearchResults {...props} path={'/beer'} appState={state} setAppState={this.props.setAppState} array={state.search.searchResults} />
              )} />
              {/* {(state.search.searchResults !== '') && <SearchResults appState={state}/>} */}
              <Route path='/beer/:name' render={ props => (
                <BeerCard {...props} array={this.props.appState.search.searchResults} appState={this.props.appState} setAppState={this.props.setAppState} />
              )} />
              <Route path='/fridge/:name' render={ props => (
                <BeerCard {...props} array={this.props.appState.fridge} appState={this.props.appState} setAppState={this.props.setAppState} />
              )} />
            </Switch>
          <footer className="footer">
            <Link className="router-link" to="/dashboard">
              <i className="fa fa-home fa-2x" aria-hidden="true"></i>
            </Link>
          </footer>
        </div>
      )
    }
};

export default Header
