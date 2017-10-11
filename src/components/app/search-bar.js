import React, { Component } from 'react';
import './../../styles/search-bar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  inputHandler(e) {
    let query = this.search.value;   
    this.props.setAppState(() => {
      let newState = Object.assign({}, this.props.appState)
      newState.search.searchQuery = query;
      return newState;
    })
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.setAppState({loading: true});
    let path = `/search/${this.props.appState.search.searchQuery}` 
    this.props.history.push(path);      
  }
  render() {
    return (
      <div className="container search-container">
        <form onSubmit={this.submitHandler}>
          <input onChange={this.inputHandler} type="text" className="search-bar" ref={ (input) => this.search = input } />
          <button type="submit" className="search-button">
            <i className="fa fa-search" aria-hidden="true" />
          </button>
        </form>
      </div>
    )
  }
}

export default SearchBar