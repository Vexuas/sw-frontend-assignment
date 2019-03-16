import React, { Component } from "react";
import "./content.css";
import ActivityFeed from "../ActivityFeed/activityfeed";
import TeamFeed from "../TeamFeed/teamfeed";

class Content extends Component {
  render() {
    return (
      <div className="swTest-content">
        <TeamFeed
          contentTitle={this.props.contentTitle}
          teams={this.props.teams}
        />
        <ActivityFeed actFeed={this.props.actFeed} />
      </div>
    );
  }
}

export default Content;
