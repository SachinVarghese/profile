import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import styles from "./profile.module.css";
import { Router } from "@reach/router";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Skill from "./pages/skill/Skill";
import Avocation from "./pages/avocation/Avocation";

import blue from "@material-ui/core/colors/blueGrey";
import Timeline from "./pages/timeline/Timeline";
import Header from "./Header";

class Profile extends React.Component {

  render() {
    return (
      <div className={styles.root}>
        <Header />
        <Router
          className={styles.mainBackground}
          onClick={this.handleSideBarClose}
          basepath="/profile"          
        >
          <Home default key="home" path="" />
          <About key="about" path="/about" />
          <Timeline key="timeline" path="/timeline" />
          <Skill key="skill" path="/skill" />
          <Avocation key="avocation" path="/avocation" />
        </Router>
      </div>
    );
  }
}

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: blue
  }
});

class Main extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Profile />
      </MuiThemeProvider>
    );
  }
}
export default Main;
