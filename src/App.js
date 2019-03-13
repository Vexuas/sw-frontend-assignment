import React, { Component } from "react";
import "./App.css";
import SideNav from "./components/SideNav/sidenav";
import NavBar from "./components/NavBar/navbar";
import Header from "./components/Header/header";
import Content from "./components/Content/content";
import ActivityFeed from "./components/ActivityFeed/activityfeed";

class App extends Component {
  render() {
    return (
      <main className="swTest">
        <SideNav sidenavTitle="Teams" />
        <NavBar navbarTitle="Teams" />
        <Header />
        <Content />
        <ActivityFeed />
      </main>
    );
  }
}

export default App;
