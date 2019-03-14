import React, { Component } from "react";
import "./App.css";
import SideNav from "./components/SideNav/sidenav";
import NavBar from "./components/NavBar/navbar";
import Header from "./components/Header/header";
import Content from "./components/Content/content";
import ActivityFeed from "./components/ActivityFeed/activityfeed";

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

class App extends Component {
  render() {
    return (
      <main className="swTest">
        <SideNav sidenavTitle="Teams" sideLogos={sideLogos} />
        <NavBar navbarTitle="Teams" />
        <Header
          headerTitle="Teams"
          headerLogo="https://cdn.discordapp.com/attachments/248430185463021569/555448393166487559/icon_companies.png"
        />
        <Content />
        <ActivityFeed />
      </main>
    );
  }
}

export default App;
