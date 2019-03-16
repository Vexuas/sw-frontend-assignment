import React, { Component } from "react";
import "./navbar.css";
import MenuSettings from "../MenuSettings/menusettings";

class NavBar extends Component {
  render() {
    return (
      <div className="swTest-navbar">
        <span className="swTest-navbar-name">NARWHAL</span>
        <span className="swTest-navbar-title">{this.props.navbarTitle}</span>
        <MenuSettings userFeed={this.props.userFeed} />
      </div>
    );
  }
}

export default NavBar;
