import React, { Component } from "react";
import "./header.css";
import HeaderFirstSegment from "../HeaderFirstSegment/headerfirstsegment";
import HeaderSecondSegment from "../HeaderSecondSegment/headersecondsegment";

class Header extends Component {
  render() {
    return (
      <div className="swTest-header">
        <HeaderFirstSegment
          headerTitle={this.props.headerTitle}
          headerLogo={this.props.headerLogo}
        />
        <HeaderSecondSegment />
      </div>
    );
  }
}
export default Header;
