import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../styles/search-item.css'

class SearchItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container search-item-container">
        <div className="info-container">
          <span className="item-name">{this.props.name}</span>
          {/* <span className="item-type">{this.props.type}</span>    */}
        </div>
          <Link to={this.props.path + `/${this.props.name}`} className="arrow-container">
            <i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
          </Link>
      </div>
    );
  }
}

export default SearchItem;