import React, { Component } from 'react';

class AppState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: {
        text: 'Beer Fridge'
      },
      search: {
        initialSearch: true,
        newSearch: false,
        searchQuery: '',
        searchResults: []
      },
      selectedBeer: {},
      username: '',
      email: '',
      password: '',
      verifyPassword: '',
      matchError: false,
      jwt: '',
      loggedIn: false,
      addBeerSuccess: false,
      fridgeLoaded: false,
      fridge: [],
      sideNav: {
        naviconClicked: false,
        menuHidden: true
      },
      newUser: true,
      loading: false
    }
    this.setAppState = this.setAppState.bind(this);
  };
  


  setAppState(newState, callback) {

    this.setState(newState, callback);
  }

  render() {
    return (
      <div className="AppState">
        {React.Children.map(this.props.children, child => {
          return React.cloneElement(child, {
            appState: this.state,
            setAppState: this.setAppState
          });
        })}
      </div>
    )
  }
}

export default AppState
