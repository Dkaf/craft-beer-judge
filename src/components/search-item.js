import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../styles/search-item.css'
import stockPhoto from './../stock-logo-replacement.jpeg';

class SearchItem extends Component {

  render() {
    let thumbnailSrc = null;
    if (this.props.beer.labels) {
      thumbnailSrc = this.props.beer.labels.medium;
    } else if (this.props.beer.label) {
      thumbnailSrc = this.props.beer.label.medium;
    }
    return (
      <div className="container search-item-container">
        <Link to={this.props.path + `/${this.props.beer.name}`} className="container search-item-link">
        <div className="info-container">
          <img className="thumbnail" src={thumbnailSrc} alt="" />
          {this.props.beer.name ? <h2 className="item-name">{this.props.beer.name}</h2> : null }
          {/* <span className="item-type">{this.props.type}</span>    */}
        </div>
        <div className="container description-container">
          <span>{this.props.beer.description ? this.props.beer.description.substr(0,150) + '...' : 'No description available'}</span>
        </div>
          {/* <div className="arrow-container">
            <i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
          </div> */}
        </Link>
      </div>
    );
  }
}

export default SearchItem;