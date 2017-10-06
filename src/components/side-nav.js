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
    let clicked = (this.props.naviconClass === 'navicon') ? 'navicon clicked' : 'navicon';
    let hidden = (this.props.menuClass === 'hidden') ? '' : 'hidden';
    console.log(this.props.appState);
    this.props.setAppState(() => {
      return (
        this.props.appState.sideNav.naviconClass = clicked,
        this.props.appState.sideNav.menuClass = hidden
      )
    });
  }
  render() {
    return (
      <div>
        <button id="navicon" className={this.props.naviconClass} onClick={this.onClick}></button>
        <div id="menu" className={this.props.menuClass}>
          <ul id="menu-list">
            <li className="menu-item"><Link to="/" onClick={this.onClick}>Home</Link></li>
            <li className="menu-item">Beer</li>
            <li className="menu-item">About</li>
            <li className="menu-item"><Link to="/about" onClick={this.onClick}>About</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default SideNav