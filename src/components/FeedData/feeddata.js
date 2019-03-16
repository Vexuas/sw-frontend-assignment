import React, { Component } from "react";
import "./feeddata.css";
import { FeedDataCard } from "../FeedDataCard/feeddatacard";

class FeedData extends Component {
  render() {
    let actFeed = this.props.actFeed;
    return (
      <div className="swTest-activityFeed-list">
        {actFeed.map(item => {
          return <FeedDataCard activity={item} key={item.id} />;
        })}
      </div>
    );
  }
}
export default FeedData;
