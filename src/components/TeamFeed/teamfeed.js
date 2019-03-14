import React, { Component } from "react";
import "./teamfeed.css";
import TeamCard from "../TeamCard/teamcard";
let teamData = [];

class TeamFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamData: this.getAllTeams()
    };
  }
  getAllTeams() {
    fetch("http://localhost:4002/teams")
      .then(response => response.json())
      .then(response => {
        teamData = [];
        const teams = response;
        teams.forEach(item => {
          teamData.push(item);
        });
        this.setState({
          teamData: teamData
        });
        console.log(this.state.teamData);
      });
  }
  render() {
    return (
      <div className="swTest-content-teamData">
        <div className="swTest-feed-header">
          <span className="swTest-feed-title">{this.props.title}</span>
          <span className="swTest-content-teamCount">
            Showing {this.props.count} out of {teamData.length} teams
          </span>
        </div>
        <div className="swTest-content-teams">
          {teamData.map(item => {
            return <TeamCard teamInfo={item} key={item.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default TeamFeed;
