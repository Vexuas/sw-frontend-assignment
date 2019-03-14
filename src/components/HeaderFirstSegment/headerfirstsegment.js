import React, { Component } from "react";
import "./headerfirstsegment.css";

class HeaderFirstSegment extends Component {
  render() {
    return (
      <div className="swTest-header-firstSegment">
        <img
          className="swTest-header-logo"
          src={this.props.headerLogo}
          alt="Header Logo"
        />
        <span className="swTest-header-title">{this.props.headerTitle}</span>
        <div className="swTest-header-newTeam">
          <span className="swTest-header-newTeamAdd">+</span>
          <span className="swTest-header-newTeamTitle">CREATE NEW TEAM</span>
        </div>
      </div>
    );
  }
}
export default HeaderFirstSegment;
