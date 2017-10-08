import React, { Component } from 'react';
import './../../styles/search-bar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  inputHandler(e) {
    let target = e.target;
    this.props.setAppState(() => {
      let newState = Object.assign({}, this.props.state)
      newState.search.searchQuery = target.value;
      return newState;
    })
  }

  submitHandler(e) {
    e.preventDefault();
    let request = {
      method: 'GET'
    };
    let url = 'https://shielded-brook-50392.herokuapp.com/beers/' + this.props.state.search.searchQuery;
    fetch(url, request)
    .then( data => data.json())
    .then( results => {
      this.props.setAppState(() => {
        let newState = Object.assign({}, this.props.state);
        newState.search.searchResults = results.body.data
        return newState;
      });
    }).catch( err => {console.log(err)});
  }
  render() {
    return (
      <div className="container search-container">
        <input onChange={this.inputHandler} type="text" className="search-bar" />
        <button onSubmit={this.submitHandler} type="submit" className="search-button">
          <i className="fa fa-search" aria-hidden="true" />
        </button>
      </div>
    )
  }
}

export default SearchBar