import React, { Component } from "react";
import "./teamcardbot.css";

class TeamCardBot extends Component {
  render() {
    return (
      <div className="swTest-teamCard-bot">
        <img
          className="swTest-content-icon"
          alt="icons"
          src="https://cdn.discordapp.com/attachments/248430185463021569/555987063715921930/icon-campaign3.png"
        />
        <span className="swTest-content-campCount">
          {this.props.teaminfoCamp} Campaigns
        </span>
        <img
          className="swTest-content-icon"
          alt="icons"
          src="https://cdn.discordapp.com/attachments/248430185463021569/555987087254618124/icon-leads3.png"
        />
        <span className="swTest-content-campCount">
          {this.props.teaminfoLeads} Leads
        </span>
      </div>
    );
  }
}

export default TeamCardBot;
