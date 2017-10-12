import React, { Component } from 'react';
import SearchResults from './../search-results';

import './../../styles/dashboard.css';

class Dashboard extends Component {

  componentWillMount() {
    let options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "x-access-token": this.props.appState.jwt
      }
    }
    fetch('https://shielded-brook-50392.herokuapp.com/api/getuser/', options)
    .then( res=> res.json())
    .then(user => {
      this.props.setAppState(() => {
        let newState = Object.assign({}, this.props.appState);
        newState.header.text = 'Dashboard';
        newState.fridge = user.data.fridge;
        newState.loading = false;
        return newState;
      })
    }).catch( err => console.log(err));
  }

  render() {
    return (
      <div className="container dashboard-container">
        <h2>My Beers:</h2>
        <SearchResults path={'/fridge'} appState={this.props.appState}  array={this.props.appState.fridge} />
      </div>
    )
  }
}

export default Dashboard;