import React, { Component } from 'react';

class SearchItem extends Component {
  render() {
    return (
      <div>
        <div className="arrow-container">
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </div>
        <div className="search-item-container">
          <span className="item-name">{this.props.name}</span>
          <span className="item-type">{this.props.type}</span>   
        </div>     
      </div>
    );
  }
}

export default SearchItem;