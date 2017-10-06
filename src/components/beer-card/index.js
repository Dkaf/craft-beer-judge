import React, { Component } from 'react';

class BeerCard extends Component {
  render() {
    const state = this.props.appState
    return (
      <div>
        <h2 className="beer-name">{state.beerName}</h2>
        <img className="beer-label" src={state.beerLabel} alt="beer label" />
        <span className="beer-style">{state.beerStyle}</span>
        <p className="beer-description">{state.beerDescription}</p>
      </div>
    );
  }
}

export default BeerCard;