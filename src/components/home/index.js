import React, { Component } from 'react';
import DisplayButton from './../display-button';
import SignUp from './signup';
import Login from './login';

import './../../styles/home.css';


class Home extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {

  }
  render() {
    const state = this.props.appState;
    const setAppState = this.props.setAppState;
    const userForm = state.newUser ? <SignUp appState={state} setAppState={setAppState}/> : <Login appState={state} setAppState={setAppState}/>;
    return (
      <div className="container home-container">
        {userForm}
        <DisplayButton appState={state} setAppState={setAppState} className="login" />
      </div>
    )
  }
}

export default Home