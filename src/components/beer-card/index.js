import React, { Component } from 'react';
import AddBeer from './add-beer';
import './../../styles/beer-card.css'

class BeerCard extends Component {

  componentWillMount() {
    let newState = Object.assign({}, this.props.appState);
      this.props.array.find((beer) => {
        if (beer.name === this.props.match.params.name) {
          newState.selectedBeer = beer;
          }
          return this.props.setAppState(() => {
            return newState
          });
        })
  }

  render() {
    const state = this.props.appState
    const label = state.selectedBeer.labels ? state.selectedBeer.labels.medium : '#'
    let showButton = state.selectedBeer.rating ? <span>Your rating: {state.selectedBeer.rating}/10</span> : <AddBeer appState={state} setAppState={this.props.setAppState} />;
    return (
      <div className="beer-info-container">
        <h2 className="beer-name">{state.selectedBeer.name}</h2>
        <img className="beer-label" src={label} alt="beer label" />
        {/* <span className="beer-style">{state.selectedBeer.style.shortName}</span> */}
        <p className="beer-description">{state.selectedBeer.description ? state.selectedBeer.description : 'no description available'}</p>
        <AddBeer appState={state} setAppState={this.props.setAppState} />
      </div>
    );
  }
}

export default BeerCard;