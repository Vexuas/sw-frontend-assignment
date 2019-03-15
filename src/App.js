import React, { Component } from "react";
import "./App.css";
import SideNav from "./components/SideNav/sidenav";
import NavBar from "./components/NavBar/navbar";
import Header from "./components/Header/header";
import Content from "./components/Content/content";

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
const styles = {
  borderBottom: "3px solid #0083e3",
  color: "#0083e3",
  cursor: "default"
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Allstyles: styles,
      Favstyles: null,
      Arcstyles: null,
      Allactive: true,
      Favactive: false,
      Arcactive: false,
      contentTitle: "All"
    };
    this.changeTabsAll = this.changeTabsAll.bind(this);
    this.changeTabsFav = this.changeTabsFav.bind(this);
    this.changeTabsArc = this.changeTabsArc.bind(this);
  }
  changeTabsAll() {
    this.setState({
      Allstyles: styles,
      Favstyles: null,
      Arcstyles: null,
      Allactive: true,
      Favactive: false,
      Arcactive: false,
      contentTitle: "All"
    });
  }
  changeTabsFav() {
    this.setState({
      Allstyles: null,
      Favstyles: styles,
      Arcstyles: null,
      Allactive: false,
      Favactive: true,
      Arcactive: false,
      contentTitle: "Favorite"
    });
  }
  changeTabsArc() {
    this.setState({
      Allstyles: null,
      Favstyles: null,
      Arcstyles: styles,
      Allactive: false,
      Favactive: false,
      Arcactive: true,
      contentTitle: "Archived"
    });
  }
  render() {
    return (
      <main className="swTest">
        <SideNav sidenavTitle="Teams" sideLogos={sideLogos} />
        <NavBar navbarTitle="Teams" />
        <Header
          headerTitle="Teams"
          headerLogo="https://cdn.discordapp.com/attachments/248430185463021569/555448393166487559/icon_companies.png"
          Allstyles={this.state.Allstyles}
          Favstyles={this.state.Favstyles}
          Arcstyles={this.state.Arcstyles}
          changeTabsAll={this.changeTabsAll}
          changeTabsFav={this.changeTabsFav}
          changeTabsArc={this.changeTabsArc}
        />
        <Content
          all={this.state.Allactive}
          fav={this.state.Favactive}
          arc={this.state.Arcactive}
          contentTitle={this.state.contentTitle}
        />
      </main>
    );
  }
}

export default App;
