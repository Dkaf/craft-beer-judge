import React, { Component } from 'react';
import './../styles/display-button.css';


class DisplayButton extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  

  onClick(e) {
    e.preventDefault();
    let newUser = this.props.appState.newUser ? false : true;
    this.props.setAppState({newUser: newUser})
  }

    render() {  
      const state = this.props.appState
      const userType = state.newUser ? 'Already signed up?' : 'Create an account';
      return (
        <div className="display-button-div"  onClick={this.onClick}>
          <span className="display-button" name={this.props.name} >{userType}</span>
        </div>
      )
    }
}

export default DisplayButton