import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import styles from "./profile.module.css";
import SideBar from "./SideBar";
import { Router } from "@reach/router";
import Home from "./pages/home/Home";
import About from "./pages/about/About";

import purple from "@material-ui/core/colors/purple";

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
          basepath="/"
          onClick={this.handleSideBarClose}
        >
          <Home default key="home" path="" />
          <About key="about" path="about" />
        </Router>
      </div>
    );
  }
}

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: purple
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
