import React, { Component } from "react";
import "./menusettings.css";

class MenuSettings extends Component {
  render() {
    let userFeed = this.props.userFeed;
    return (
      <div className="swTest-navbar-menuSettings">
        <div className="swTest-navbar-notifications">
          <img
            src="https://cdn.discordapp.com/attachments/511245116871278594/555290110225022976/icon-mail.png"
            alt="mail icon"
            className="swTest-navbar-mailIcon"
          />
          <span className="swTest-navbar-notifCount">
            {userFeed.notifications_count}
          </span>
        </div>
        <span className="swTest-navbar-userName">Hello, {userFeed.name}</span>
        <img
          className="swTest-navbar-userAvatar"
          src={userFeed.avatar}
          alt="user avatar"
        />
        <span className="swTest-navbar-userSettings" />
      </div>
    );
  }
}

export default MenuSettings;
