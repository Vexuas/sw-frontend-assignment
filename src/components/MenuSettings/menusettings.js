import React, { Component } from "react";
import "./menusettings.css";

class MenuSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_user_name: this.getCurrentUser(),
      current_user_avatar: this.getCurrentUser(),
      notification_count: this.getCurrentUser()
    };
  }
  getCurrentUser() {
    fetch("http://localhost:4002/current_user")
      .then(response => response.json())
      .then(response => {
        const currentUser = response;
        this.setState({
          current_user_name: currentUser.name,
          current_user_avatar: currentUser.avatar,
          notification_count: currentUser.notifications_count
        });
      });
  }
  render() {
    return (
      <div className="swTest-navbar-menuSettings">
        <div className="swTest-navbar-notifications">
          <img
            src="https://cdn.discordapp.com/attachments/511245116871278594/555290110225022976/icon-mail.png"
            alt="mail icon"
            className="swTest-navbar-mailIcon"
          />
          <span className="swTest-navbar-notifCount">
            {this.state.notification_count}
          </span>
        </div>
        <span className="swTest-navbar-userName">
          Hello, {this.state.current_user_name}
        </span>
        <img
          className="swTest-navbar-userAvatar"
          src={this.state.current_user_avatar}
          alt="user avatar"
        />
        <span className="swTest-navbar-userSettings" />
      </div>
    );
  }
}

export default MenuSettings;
