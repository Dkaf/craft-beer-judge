import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AppState from './../../app-state';
import Header from './header';
import './../../styles/App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter >
          <Route path='/' render={ props=> (
            <AppState>
              <Header {...props} />
            </AppState>
          )} />
        </BrowserRouter>

    )
  }
}


export default App