import React, { Component } from 'react';

class BeerCard extends Component {

  componentWillMount() {
    let newState = Object.assign({}, this.props.appState);
    
    this.props.appState.search.searchResults.find((beer) => {
      if (beer.id === this.props.match.params.id) {
        newState.selectedBeer = beer
      };
      return this.props.setAppState(() => {
        return newState;
      });
    })
  }

  render() {
    const selectedBeer = this.props.appState.selectedBeer
    const 
    return (
      <div>
        <h2 className="beer-name">{selectedBeer.name}</h2>
        <img className="beer-label" src={selectedBeer.labels.medium ? selectedBeer.labels.medium : ''} alt="beer label" />
        <span className="beer-style">{selectedBeer.style.shortName}</span>
        <p className="beer-description">{selectedBeer.description ? selectedBeer.description : 'no description available'}</p>
      </div>
    );
  }
}

export default BeerCard;