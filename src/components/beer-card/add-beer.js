import React, { Component } from 'react';

class AddBeer extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    let beer = this.props.appState.selectedBeer;
    e.preventDefault();
    let options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "x-access-token": this.props.appState.jwt
      },
      body: JSON.stringify({
        beer: beer,
        rating: this.rating.value,
      })
    };
    let url = 'https://shielded-brook-50392.herokuapp.com/api/beer/addbeer';
    fetch(url, options)
    .then( res => res.json())
    .then( data => {
      this.props.setAppState(() => {
        let newState = Object.assign({}, this.props.appState)
        newState.successMsg = 'Beer has been added!';
        newState.fridge.push(this.props.appState.selectedBeer);
        return newState;
      })
    }).catch(err => console.log(err));
  }
  render() {
    return (
      <div className="container add-beer-container">
        <div className="rating">
          <label className="rating-input-label" htmlFor="rating-input">Rating:</label>
          <input name="rating-input" className="rating-input" maxLength="2" size="2" min="1" max="10" type="text" ref={ (input) => this.rating = input} /><span>/10</span>      </div>
       <button className="add-beer button" onClick={this.onClick}>Add to my fridge</button>
      </div>
    );
  }
}

export default AddBeer;