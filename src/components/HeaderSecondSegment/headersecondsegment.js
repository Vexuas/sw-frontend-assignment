import React, { Component } from "react";
import "./headersecondsegment.css";
import { SearchInput } from "../SearchInput/searchinput";

class HeaderSecondSegment extends Component {
  render() {
    return (
      <div className="swTest-header-secondSegment">
        <div className="swTest-header-tabs">
          <span className="swTest-header-tabTitles" style={this.props.styles}>
            All
          </span>
          <span className="swTest-header-tabTitles">Favorites</span>
          <span className="swTest-header-tabTitles">Archived</span>
        </div>
        <div className="swTest-header-searchBar">
          <img
            className="swTest-header-searchIcon"
            src="https://cdn.discordapp.com/attachments/248430185463021569/555631325080715274/magnify_1.png"
            alt="search icon"
          />
          <SearchInput />
        </div>
      </div>
    );
  }
}
export default HeaderSecondSegment;
