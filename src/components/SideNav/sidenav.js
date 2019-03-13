import React, { Component } from "react";
import "./sidenav.css";

const sideLogos = [
  {
    id: 1,
    title: "Campaigns",
    img_src:
      "https://cdn.discordapp.com/attachments/511245116871278594/555263580811821071/icon-campaign2.png",
    img_alt: "sw-menu-campaigns"
  },
  {
    id: 2,
    title: "Teams",
    img_src:
      "https://cdn.discordapp.com/attachments/511245116871278594/555246501853528065/icon-teams.png",
    img_alt: "sw-menu-teams"
  },
  {
    id: 3,
    title: "Contacts",
    img_src:
      "https://cdn.discordapp.com/attachments/511245116871278594/555265413571674123/icon-leads2.png",
    img_alt: "sw-menu-contacts"
  },
  {
    id: 4,
    title: "Reports",
    img_src:
      "https://cdn.discordapp.com/attachments/511245116871278594/555273930668245003/icon-reports2.png",
    img_alt: "sw-menu-reports"
  },
  {
    id: 5,
    title: "Help",
    img_src:
      "https://cdn.discordapp.com/attachments/511245116871278594/555247457647198208/icon-help.png",
    img_alt: "sw-menu-help"
  }
];

class SideNav extends Component {
  render() {
    return (
      <div className="swTest-sidenav">
        <div className="swTest-logo">
          <img
            src="https://cdn.discordapp.com/attachments/511245116871278594/555241844196507650/sw-logo-white.png"
            alt="sw-logo"
            id="swTest-logo"
          />
        </div>
        {sideLogos.map(item => {
          if (this.props.sidenavTitle === item.title) {
            return (
              <div id="swTest-currentPage" key={item.id} title={item.title}>
                <img
                  src={item.img_src}
                  alt={item.img_alt}
                  id="swTest-currentPageImg"
                />
              </div>
            );
          } else {
            return (
              <div className="swTest-menu" key={item.id} title={item.title}>
                <img
                  src={item.img_src}
                  alt={item.img_alt}
                  className="swTest-menu-img"
                />
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default SideNav;
