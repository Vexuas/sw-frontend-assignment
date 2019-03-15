import React, { Component } from "react";
import "./teamfeed.css";
import TeamCard from "../TeamCard/teamcard";
let teamData = [];
let teamOutput = [];

class TeamFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamData: this.getTeams(),
      teamOutput: teamOutput,
      contentTitle: null,
      totalCount: null
    };
  }
  getTeams() {
    fetch("https://sw-assigment-mock-api.herokuapp.com/teams")
      .then(response => response.json())
      .then(response => {
        teamData = [];
        const teams = response;
        teams.forEach(item => {
          teamData.push(item);
        });
        this.setState({
          teamData: teamData,
          teamOutput: teamOutput
        });
        console.log(this.state.teamData);
      });
  }
  getAllTeams() {
    teamOutput = [];
    teamData.forEach(item => {
      teamOutput.push(item);
    });
  }
  getFavTeams() {
    teamOutput = [];
    teamData.forEach(item => {
      if (item.is_favorited === true) {
        teamOutput.push(item);
      } else {
        return;
      }
    });
  }
  getArcTeams() {
    teamOutput = [];
    teamData.forEach(item => {
      if (item.is_archived === true) {
        teamOutput.push(item);
      } else {
        return;
      }
    });
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
