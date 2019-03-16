import React, { Component } from "react";
import "./teamfeed.css";
import TeamCard from "../TeamCard/teamcard";

let teamOutput = [];

class TeamFeed extends Component {
  getAllTeams() {
    teamOutput = [];
    let teamData = this.props.teamFeed;
    teamOutput = teamData.filter(item => item);
  }
  getFavTeams() {
    teamOutput = [];
    let teamData = this.props.teamFeed;
    teamOutput = teamData.filter(item => item.is_favorited === true);
  }
  getArcTeams() {
    teamOutput = [];
    let teamData = this.props.teamFeed;
    teamOutput = teamData.filter(item => item.is_archived === true);
  }
  switchingTabs() {
    if (this.props.all === true) {
      this.getAllTeams();
    } else if (this.props.fav === true) {
      this.getFavTeams();
    } else if (this.props.arc === true) {
      this.getArcTeams();
    }
  }
  render() {
    this.switchingTabs();
    return (
      <div className="swTest-content-teamData">
        <div className="swTest-feed-header">
          <span className="swTest-feed-title">
            {this.props.contentTitle} Teams
          </span>
          <span className="swTest-content-teamCount">
            Showing {teamOutput.length} out of {teamOutput.length} teams
          </span>
        </div>
        <div className="swTest-content-teams">
          {teamOutput.map(item => {
            return <TeamCard teamInfo={item} key={item.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default TeamFeed;
