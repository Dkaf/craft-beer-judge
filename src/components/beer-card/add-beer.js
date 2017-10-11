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
        beer: this.props.appState.selectedBeer,
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
    let state = this.props.appState;
    return (
      <div>
        <div className="rating">
          <input type="text" ref={ (input) => this.rating = input} /><span>/10</span>
        </div>
       <button onClick={this.onClick}>Add to my fridge</button>
      </div>
    );
  }
}

export default AddBeer;