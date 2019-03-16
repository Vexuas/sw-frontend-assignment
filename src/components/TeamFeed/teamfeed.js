import React, { Component } from "react";
import "./teamfeed.css";
import TeamCard from "../TeamCard/teamcard";

class TeamFeed extends Component {
  render() {
    let teams = this.props.teams;
    let contentTitle = this.props.contentTitle;
    return (
      <div className="swTest-content-teamData">
        <div className="swTest-feed-header">
          <span className="swTest-feed-title">{contentTitle} Teams</span>
          <span className="swTest-content-teamCount">
            Showing {teams.length} out of {teams.length} teams
          </span>
        </div>
        <div className="swTest-content-teams">
          {teams.map(item => {
            return <TeamCard teamInfo={item} key={item.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default TeamFeed;
