import React, { Component } from "react";
import "./activityfeed.css";
import FeedData from "../FeedData/feeddata";

class ActivityFeed extends Component {
  render() {
    return (
      <div className="swTest-activityFeed">
        <div className="swTest-feed-header">
          <span className="swTest-feed-title">Activity</span>
        </div>
        <FeedData actFeed={this.props.actFeed} />
      </div>
    );
  }
}

export default ActivityFeed;
