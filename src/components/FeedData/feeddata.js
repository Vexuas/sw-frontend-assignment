import React, { Component } from "react";
import "./feeddata.css";
import { FeedDataCard } from "../FeedDataCard/feeddatacard";

let feedData = [];

class FeedData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedData: this.getActivityFeed()
    };
  }
  getActivityFeed() {
    fetch("http://localhost:4002/activities")
      .then(response => response.json())
      .then(response => {
        feedData = [];
        const actFeed = response;
        actFeed.forEach(item => {
          feedData.push(item);
        });
        this.setState({
          feedData: feedData
        });
        console.log(this.state.feedData);
      });
  }
  render() {
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
