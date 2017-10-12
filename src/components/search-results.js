import React, { Component } from 'react';
import SearchItem from './search-item';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.mapArray = this.mapArray.bind(this);
    this.fetchSearchResults = this.fetchSearchResults.bind(this);
  }

  mapArray(array) {
      return array.map( (beer, i) => {
          return <SearchItem key={i} beer={beer} path={this.props.path}/>
      });
  };
  
  fetchSearchResults() {
    if (this.props.path === '/beer') {
      let options = {
        method: 'GET'
      };
      let url = 'https://shielded-brook-50392.herokuapp.com/api/beers/' + this.props.match.params.query;
      let request = new Request(url, options);
      fetch(request)
      .then( data => data.json())
      .then( results => {
        this.props.setAppState(() => {
          let newState = Object.assign({}, this.props.appState);
          newState.search.searchResults = results.data.data;
          newState.loading = false;
          return newState;
        });
      }).catch( err => {console.log(err)});
    }
  }

  componentDidMount() {
    this.fetchSearchResults()                      
  }

  componentDidUpdate(oldProps) {
    if(this.props.array !== oldProps.array && this.props.array.length === 50) {
      this.fetchSearchResults()                  
    }
  }

  render() {
      return (
        <div className="container results-container">
          {(this.props.appState.loading || this.props.array === []) ? <div></div> : this.mapArray(this.props.array) } 
        </div>
      );
  }
}

export default SearchResults;