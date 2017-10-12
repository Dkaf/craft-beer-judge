import React, { Component } from 'react';
import './../styles/back-arrow.css';

class BackArrow extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    e.preventDefault()
    this.props.history.goBack()
  }
  render() {
    return (
      <div className="container back-arrow-container">
        <a onClick={this.clickHandler} className="container back-arrow-wrapper">
          <i className="fa fa-angle-left fa-3x back-arrow" aria-hidden="true"></i>
        </a>
      </div>
    );
  }
}

export default BackArrow;