import React, { Component } from "react";
import "./content.css";
import ActivityFeed from "../ActivityFeed/activityfeed";
import TeamFeed from "../TeamFeed/teamfeed";

class Content extends Component {
  render() {
    return (
      <div className="swTest-content">
        <TeamFeed
          all={this.props.all}
          fav={this.props.fav}
          arc={this.props.arc}
          contentTitle={this.props.contentTitle}
        />
        <ActivityFeed />
      </div>
    );
  }
}

export default Content;
