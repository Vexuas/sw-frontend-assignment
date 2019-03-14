import React, { Component } from "react";
import "./sidenav.css";
import SideLogos from "../SideLogos/sidelogos";

class SideNav extends Component {
  render() {
    return (
      <div className="swTest-sidenav">
        <div className="swTest-logo">
          <img
            src="https://cdn.discordapp.com/attachments/511245116871278594/555241844196507650/sw-logo-white.png"
            alt="sw-logo"
            id="swTest-logo"
          />
        </div>
        <SideLogos
          sidenavTitle={this.props.sidenavTitle}
          sideLogos={this.props.sideLogos}
        />
      </div>
    );
  }
}

export default SideNav;
