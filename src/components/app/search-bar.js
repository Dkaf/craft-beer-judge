import React, { Component } from 'react';
import './../../styles/search-bar.css';

class SearchBar extends Component {
  render() {
    return (
      <div className="container search-container">
        <input type="text" className="search-bar" />
        <button type="submit" className="search-button">
          <i className="fa fa-search" aria-hidden="true" />
        </button>
      </div>
    )
  }
}

export default SearchBar