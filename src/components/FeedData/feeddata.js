import React, { Component } from "react";
import "./feeddata.css";
import { FeedDataCard } from "../FeedDataCard/feeddatacard";

class FeedData extends Component {
  render() {
    let feedData = [];
    let actFeed = this.props.actFeed;
    actFeed.forEach(item => {
      feedData.push(item);
    });
    return (
      <div className="swTest-activityFeed-list">
        {feedData.map(item => {
          return <FeedDataCard activity={item} key={item.id} />;
        })}
      </div>
    );
  }
}
export default FeedData;
