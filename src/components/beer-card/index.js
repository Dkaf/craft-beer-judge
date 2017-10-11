import React, { Component } from 'react';
import AddBeer from './add-beer';
import './../../styles/beer-card.css'

class BeerCard extends Component {

  componentDidMount() {
    let newState = Object.assign({}, this.props.appState);
    this.props.array.find((beer) => {
      if (beer.name === this.props.match.params.name) {
        newState.selectedBeer = beer;
      }
      return this.props.setAppState(() => {
        return newState
      });
    });
  }

  render() {
    const state = this.props.appState
    const label = state.selectedBeer.labels ? state.selectedBeer.labels.medium : '#';
    const style = state.selectedBeer.style ? state.selectedBeer.style.name : '';
    const glass = state.selectedBeer.glass ? state.selectedBeer.glass.name : '';
    let showButton = state.selectedBeer.rating ? <span className="your-rating">Your rating: {state.selectedBeer.rating}/10</span> : <AddBeer appState={state} setAppState={this.props.setAppState} />;
    if(this.props.appState.selectedBeer === {}) {
      return <div></div>
    } else {
      return (
        <div className="container beer-info-container">
          <div className="container beer-info-inside-wrapper">
            <h2 className="beer-name">{state.selectedBeer.name}</h2>
            <img className="beer-label" src={label} alt="beer label" />
            <h3 className="beer-style">{style}</h3>
            <p className="beer-description">{state.selectedBeer.description ? state.selectedBeer.description : 'no description available'}</p>
            <span className="beer-abv">abv: {state.selectedBeer.abv}</span>
            {<span className="beer-glass">glassware: {glass}</span>}
            {showButton}
          </div>
        </div>
      );
    }
  }
}

export default BeerCard;