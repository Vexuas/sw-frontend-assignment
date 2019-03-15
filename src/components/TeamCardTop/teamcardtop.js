import React, { Component } from "react";
import "./teamcardtop.css";

const style0 = {
  filter: "sepia() saturate(10000%) hue-rotate(360deg)",
  transform: "scale(1.2)"
};
const style1 = {
  filter: "sepia() saturate(10%) hue-rotate(360deg)",
  transform: "scale(1.2)"
};
class TeamCardTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: null
    };
    this.hoverIn = this.hoverIn.bind(this);
    this.hoverOut = this.hoverOut.bind(this);
  }

  hoverIn() {
    if (
      this.props.star ===
      "https://cdn.discordapp.com/attachments/248430185463021569/555813454062026785/star_default.png"
    ) {
      this.setState({
        style: style0
      });
    } else if (
      this.props.star ===
      "https://cdn.discordapp.com/attachments/248430185463021569/555813482663247892/star_active.png"
    ) {
      this.setState({
        style: style1
      });
    }
  }

  hoverOut() {
    this.setState({
      style: null
    });
  }
  render() {
    return (
      <div className="swTest-teamCard-top">
        <img
          className="swTest-content-teamsImage"
          src={this.props.teaminfo.image}
          alt="target logo"
        />
        <span className="swTest-content-teamName">
          {this.props.teaminfo.name}
        </span>
        <span className="swTest-content-teamDate">
          {this.props.createdDate}
        </span>
        <img
          className="swTest-content-star"
          alt="target logo"
          src={this.props.star}
          style={this.state.style}
          onMouseEnter={this.hoverIn}
          onMouseLeave={this.hoverOut}
        />
      </div>
    );
  }
}
export default TeamCardTop;
