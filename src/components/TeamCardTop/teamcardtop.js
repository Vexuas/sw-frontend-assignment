import React, { Component } from "react";
import "./teamcardtop.css";

class TeamCardTop extends Component {
  render() {
    return (
      <div className="swTest-teamCard-top">
        <img
          className="swTest-content-teamsImage"
          src={this.props.teaminfo.image}
          alt="target logo"
        />
        <span className="swTest-content-teamName">
          {this.props.teaminfo.name}
        </span>
        <span className="swTest-content-teamDate">
          {this.props.createdDate}
        </span>
        <img className="swTest-content-star" src={this.props.star} />
      </div>
    );
  }
}
export default TeamCardTop;
