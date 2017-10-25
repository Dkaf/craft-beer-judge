import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../styles/side-nav.css'


class SideNav extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    (e.target.id === 'navicon') && e.preventDefault();
    let clicked = (this.props.naviconClicked === false) ? true : false;
    let hidden = (this.props.menuHidden === true) ? false : true;
    this.props.setAppState(() => {
      return (
        this.props.appState.sideNav.naviconClicked = clicked,
        this.props.appState.sideNav.menuHidden = hidden
      )
    });
  }
  render() {
    return (
      <div className="side-nav">
        <button id="navicon" className={this.props.naviconClicked ? 'navicon clicked' : 'navicon'} onClick={this.onClick}></button>
        <div id="menu" className={this.props.menuHidden ? 'hidden' : ''}>
          <ul id="menu-list">
            <li className="menu-item"><Link to="/" onClick={this.onClick}>Home</Link></li>
            <li className="menu-item">Beer</li>
            <li className="menu-item"><Link to="/about" onClick={this.onClick}>About</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default SideNav