import React, { Component } from 'react';
import SearchItem from './search-item';

class SearchResults extends Component {
  render() {

    let results = this.props.appState.search.searchResults.map( (beer, i) => {
      return <SearchItem key={i} beer={beer} id={beer.id} name={beer.name} type={beer.style.name}/>
    })

    return (
      <div className="container results-container">
        {results} 
      </div>
    );
  }
}

export default SearchResults;