import React, { Component } from 'react';
import SearchItem from './search-item';

class SearchResults extends Component {

  render() {

    let results = this.props.array.map( (beer, i) => {
      return <SearchItem key={i} labels={beer.labels} id={beer.id} name={beer.name} type={beer.style.name} path={this.props.path}/>
    })

    return (
      <div className="container results-container">
        {results} 
      </div>
    );
  }
}

export default SearchResults;