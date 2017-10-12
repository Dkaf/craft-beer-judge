import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../styles/search-item.css'

class SearchItem extends Component {

  render() {
    return (
      <div className="container search-item-container">
        <Link to={this.props.path + `/${this.props.beer.name}`} className="container search-item-link">
        <div className="info-container">
          {this.props.beer.labels ? <img className="thumbnail" src={this.props.beer.labels.medium} alt="beer label" /> : null }
          {this.props.beer.name ? <span className="item-name">{this.props.beer.name}</span> : null }
          {/* <span className="item-type">{this.props.type}</span>    */}
        </div>
          <div className="arrow-container">
            <i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
          </div>
        </Link>
      </div>
    );
  }
}

export default SearchItem;