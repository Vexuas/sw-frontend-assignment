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
      <div className="App">
        <NavBar />
        <Header />
        <Content />
        <ActivityFeed />
        <SideNav />
      </div>
    );
  }
}

export default App;
