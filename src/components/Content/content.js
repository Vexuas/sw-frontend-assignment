import React, { Component } from "react";
import "./content.css";
import ActivityFeed from "../ActivityFeed/activityfeed";
import TeamFeed from "../TeamFeed/teamfeed";

class Content extends Component {
  render() {
    return (
      <div className="swTest-content">
        <TeamFeed title="All Teams" count="9" />
        <ActivityFeed />
      </div>
    );
  }
}

export default Content;
