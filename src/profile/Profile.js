import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import styles from "./profile.module.css";
import { Router } from "@reach/router";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Header from "./Header";

import blue from "@material-ui/core/colors/blueGrey";
import yellow from "@material-ui/core/colors/yellow";
class Profile extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <Header />
        <Router className={styles.mainBackground} basepath="/profile">
          <Home default key="home" path="" />
          <About key="about" path="/about" />
        </Router>
      </div>
    );
  }
}

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: blue,
    secondary: yellow,
  },
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
