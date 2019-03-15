import React, { Component } from "react";
import "./teamcardmid.css";

function decreaseString(desc) {
  if (desc.length > 70) {
    return `${desc.slice(0, 82)} ...`;
  } else {
    return desc;
  }
}
class TeamCardMid extends Component {
  render() {
    return (
      <div className="swTest-teamCard-mid">
        <span className="swTest-content-desc">
          {decreaseString(this.props.teaminfoDesc)}
        </span>
      </div>
    );
  }
}
export default TeamCardMid;
