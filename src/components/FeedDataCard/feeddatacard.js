import React from "react";
import "./feeddatacard.css";

function getActivityPhrase(name, target, action, time) {
  switch (action) {
    case "increased_quota":
      return (
        <div className="swTest-activityFeed-desc">
          <span className="swTest-activityFeed-phrase">
            <b>{name}</b> increased <b>{target}</b>'s quota
          </span>
          <span className="swTest-activityFeed-time">{time}</span>
        </div>
      );
    case "added_leads":
      return (
        <div className="swTest-activityFeed-desc">
          <span className="swTest-activityFeed-phrase">
            <b>{name}</b> added new leads to <b>{target}</b>
          </span>
          <span className="swTest-activityFeed-time">{time}</span>
        </div>
      );
    case "archived_team":
      return (
        <div className="swTest-activityFeed-desc">
          <span className="swTest-activityFeed-phrase">
            <b>{name}</b> archived the team <b>{target}</b>
          </span>
          <span className="swTest-activityFeed-time">{time}</span>
        </div>
      );
    default:
      return;
  }
}
export const FeedDataCard = props => {
  return (
    <div className="swTest-activityFeed-data">
      <img
        src={props.activity.person.avatar}
        alt="user avatar"
        className="swTest-navbar-userAvatar"
      />
      {getActivityPhrase(
        props.activity.person.name,
        props.activity.target,
        props.activity.action,
        props.activity.created_at
      )}
    </div>
  );
};
