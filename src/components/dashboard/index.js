import React, { Component } from 'react';

class Dashboard extends Component {

  componentWillMount() {
    this.props.setAppState(() => {
      let newState = Object.assign({}, this.props.appState);
      newState.header.text = 'Dashboard';
      return newState;
    })
  }

  render() {
    return (
      <div>
        <span>Dashboard content goes here</span>
      </div>
    )
  }
}

export default Dashboard;