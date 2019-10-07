import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import styles from "./profile.module.css";
import SideBar from "./SideBar";
import { Router } from "@reach/router";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Skill from "./pages/skill/Skill";
import Avocation from "./pages/avocation/Avocation";

import blue from "@material-ui/core/colors/blueGrey";

class Profile extends React.Component {
  state = {
    sideBarOpen: false
  };

  handleSideBarOpen = () => {
    this.setState({ sideBarOpen: true });
  };

  handleSideBarClose = () => {
    this.setState({ sideBarOpen: false });
  };

  render() {
    return (
      <div className={styles.root}>
        <SideBar
          open={this.state.sideBarOpen}
          trigger={this.handleSideBarOpen}
          close={this.handleSideBarClose}
        />
        <Router
          className={styles.mainBackground}
          onClick={this.handleSideBarClose}
          basepath="/profile"          
        >
          <Home default key="home" path="" />
          <About key="about" path="/about" />
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
