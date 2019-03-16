import React, { Component } from "react";
import "./App.css";
import SideNav from "./components/SideNav/sidenav";
import NavBar from "./components/NavBar/navbar";
import Header from "./components/Header/header";
import Content from "./components/Content/content";

//Side Navigation Bar Information
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

//Current Team Tab styles
const styles = {
  borderBottom: "3px solid #0083e3",
  color: "#0083e3",
  cursor: "default"
};
//Initial Team Data
let teamOutput = [];

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
      contentTitle: "All",
      actFeed: [],
      teamFeed: [],
      userFeed: {}
    };
    this.changeTabsAll = this.changeTabsAll.bind(this);
    this.changeTabsFav = this.changeTabsFav.bind(this);
    this.changeTabsArc = this.changeTabsArc.bind(this);
  }

  //Switching to different Team Tabs
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

  //Fetching data from mock api
  getApiData() {
    fetch("https://sw-assigment-mock-api.herokuapp.com/db").then(response =>
      response.json().then(response => {
        const apiData = response;
        this.setState({
          actFeed: apiData.activities,
          teamFeed: apiData.teams,
          userFeed: apiData.current_user
        });
      })
    );
  }

  //Filtering teams between all, favorites & archived
  getAllTeams() {
    teamOutput = [];
    let teamData = this.state.teamFeed;
    teamOutput = teamData.filter(item => item);
  }

  getFavTeams() {
    teamOutput = [];
    let teamData = this.state.teamFeed;
    teamOutput = teamData.filter(item => item.is_favorited === true);
  }

  getArcTeams() {
    teamOutput = [];
    let teamData = this.state.teamFeed;
    teamOutput = teamData.filter(item => item.is_archived === true);
  }

  //Displaying teams after each tab switch
  switchingTabs() {
    if (this.state.Allactive === true) {
      this.getAllTeams();
    } else if (this.state.Favactive === true) {
      this.getFavTeams();
    } else if (this.state.Arcactive === true) {
      this.getArcTeams();
    }
  }

  componentDidMount() {
    this.getApiData();
  }
  render() {
    this.switchingTabs();
    return (
      <main className="swTest">
        <SideNav sidenavTitle="Teams" sideLogos={sideLogos} />
        <NavBar navbarTitle="Teams" userFeed={this.state.userFeed} />
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
          actFeed={this.state.actFeed}
          teams={teamOutput}
        />
      </main>
    );
  }
}

export default App;
