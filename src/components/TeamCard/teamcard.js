import React, { Component } from "react";
import "./teamcard.css";
import TeamCardTop from "../TeamCardTop/teamcardtop";
import TeamCardMid from "../TeamCardMid/teamcardmid";
import TeamCardBot from "../TeamCardBot/teamcardbot";

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
        <TeamCardTop
          teaminfo={teaminfo}
          star={star}
          createdDate={createdDate}
        />
        <TeamCardMid teaminfoDesc={teaminfo.description} />
        <TeamCardBot
          teaminfoCamp={teaminfo.campaigns_count}
          teaminfoLeads={teaminfo.leads_count}
        />
      </div>
    );
  }
}
export default TeamCard;
