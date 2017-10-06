import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './header';
import './../../styles/App.css';

class App extends Component {
  render() {
    const state = this.props.appState;

    return (
      <BrowserRouter>
        <Header appState={state} setAppState={this.props.setAppState}/>
      </BrowserRouter>
    )
  }
}


export default App