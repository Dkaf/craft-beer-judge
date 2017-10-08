import React, { Component } from 'react';
import SearchItem from './search-item';

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    let results = this.props.appState.searchResults.map( beer => {
      return <SearchItem id={beer.id} name={beer.name} type={beer.type}/>
    })

    return (
      <div>
        {results}
      </div>
    );
  }
}

export default SearchResults;