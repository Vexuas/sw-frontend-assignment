import React, { Component } from "react";
import "./teamcard.css";

class TeamCard extends Component {
  render() {
    let teaminfo = this.props.teamInfo;
    let createdDate = "";
    let star = "";
    let archived = {};
    //Created Dates
    if (teaminfo.created_at !== undefined) {
      createdDate = `Created on ${teaminfo.created_at}`;
    } else {
      createdDate = "";
    }
    //Favorite Icons
    if (teaminfo.is_favorited === true) {
      star =
        "https://cdn.discordapp.com/attachments/248430185463021569/555813482663247892/star_active.png";
    } else {
      star =
        "https://cdn.discordapp.com/attachments/248430185463021569/555813454062026785/star_default.png";
    }
    //Archived
    if (teaminfo.is_archived === true) {
      archived = {
        backgroundColor: "#ebeef2"
      };
    }
    return (
      <div className="swTest-content-teamCard" style={archived}>
        <div className="swTest-teamCard-top">
          <img
            className="swTest-content-teamsImage"
            src={teaminfo.image}
            alt="target logo"
          />
          <span className="swTest-content-teamName">{teaminfo.name}</span>
          <span className="swTest-content-teamDate">{createdDate}</span>
          <img className="swTest-content-star" src={star} />
        </div>
        <div className="swTest-teamCard-mid">
          <span className="swTest-content-desc">{teaminfo.description}</span>
        </div>
        <div className="swTest-teamCard-bot">
          <img
            className="swTest-content-icon"
            alt="icons"
            src="https://cdn.discordapp.com/attachments/511245116871278594/555247539834716171/icon-campaign.png"
          />
          <span className="swTest-content-campCount">
            {teaminfo.campaigns_count} Campaigns
          </span>
          <img
            className="swTest-content-icon"
            alt="icons"
            src="https://cdn.discordapp.com/attachments/511245116871278594/555247539834716171/icon-campaign.png"
          />
          <span className="swTest-content-campCount">
            {teaminfo.leads_count} Leads
          </span>
        </div>
      </div>
    );
  }
}
export default TeamCard;
