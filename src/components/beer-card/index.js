import React, { Component } from 'react';
import AddBeer from './add-beer';
import BackArrow from './../back-arrow';
import './../../styles/beer-card.css'

class BeerCard extends Component {
  constructor(props) {
    super(props);
    this.searchArray = this.searchArray.bind(this);
    this.update = this.update.bind(this);
  }

  update(newState) {
    this.props.setAppState(() => {
      return Object.assign({}, this.props.appState, newState);
    })
  }

  searchArray(firstArr, secondArr) {
    let found = true;
    let val;
    firstArr.find((beer) => {
      if (beer.name === this.props.match.params.name) {
        return (
          val = {selectedBeer: beer},
          found = true
        );
      } else {
        return found = false;
      }
    });
    if (secondArr && !found) {
      secondArr.find( (beer) => {
        if (beer.name === this.props.match.params.name) {
          return val = {selectedBeer: beer};
        } else {
          return null;
        }
      });
    }
    return this.update(val);
  }
  componentDidMount() {
    if(this.props.array === this.props.appState.search.searchResults && this.props.appState.loggedIn === true) {
      this.searchArray(this.props.appState.fridge, this.props.array);
    } else {
      this.searchArray(this.props.array);
    }
  }

  render() {
    const state = this.props.appState
    const label = state.selectedBeer.labels ? state.selectedBeer.labels : '#';
    const style = state.selectedBeer.style ? state.selectedBeer.style.name : '';
    const glass = state.selectedBeer.glass ? state.selectedBeer.glass.name : '';
    let showButton = state.selectedBeer.rating ? <span className="your-rating">Your rating: {state.selectedBeer.rating}/10</span> : <AddBeer appState={state} setAppState={this.props.setAppState} />;
    if(this.props.appState.selectedBeer === {}) {
      return <div></div>
    } else {
      return (
        <div className="container beer-info-container">
          <BackArrow history={this.props.history} />
          <div className="container beer-info-inside-wrapper">
            <h2 className="beer-name">{state.selectedBeer.name}</h2>
            <picture>
              <source srcSet={label.large} media="(min-width:768px)" />
              <source srcSet={label.medium} media="(max-width: 600px)" />
              <img className="beer-label" srcSet={label.medium} alt="beer label" />
            </picture>
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