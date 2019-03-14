import React, { Component } from "react";
import "./header.css";
import HeaderFirstSegment from "../HeaderFirstSegment/headerfirstsegment";
import HeaderSecondSegment from "../HeaderSecondSegment/headersecondsegment";

const styles = {
  borderBottom: "3px solid #0083e3",
  color: "#0083e3",
  cursor: "default"
};

class Header extends Component {
  render() {
    return (
      <div className="swTest-header">
        <HeaderFirstSegment
          headerTitle={this.props.headerTitle}
          headerLogo={this.props.headerLogo}
        />
        <HeaderSecondSegment styles={styles} />
      </div>
    );
  }
}
export default Header;
