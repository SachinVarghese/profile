import React from "react";
import styles from "./profile.module.css";
import Avatar from "@material-ui/core/Avatar";
import displayPicture from "./../assets/smv.png";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import classNames from "classnames";
import { navigate } from "@reach/router";
import { Typography } from "@material-ui/core";

const basepath = "/profile";

class Header extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "white",
        }}
      >
        <Avatar
          alt="Sachin Varghese"
          src={displayPicture}
          className={classNames(styles.Avatar)}
          onClick={() => {
            navigate(basepath);
          }}
          style={{
            position: "absolute",
            left: 15,
            cursor: "pointer",
            zIndex: 10,
          }}
        />
        <List>{PageLinks}</List>
        <List>{ConnectLinks}</List>
      </div>
    );
  }
}

export default Header;

const PageLinks = (
  <div style={{ display: "flex", marginLeft: 150 }}>
    <Typography
      variant="display1"
      color="primary"
      style={{ fontFamily: "monospace", marginTop: 10 }}
    >
      Sachin Varghese
    </Typography>
  </div>
);

const ConnectLinks = (
  <div style={{ display: "flex" }}>
    <ListItem
      disableGutters
      button
      onClick={() => {
        navigate(basepath + "/about");
      }}
      style={{ cursor: "pointer", transform: "scale(1.1)", margin: "0px 10px" }}
    >
      <ListItemText
        primary="About"
        primaryTypographyProps={{ color: "primary" }}
      />
    </ListItem>
    <ListItem
      onClick={() => {
        window.open("https://www.linkedin.com/in/sachinmv/", "_blank");
      }}
      style={{ cursor: "pointer" }}
    >
      <FontAwesomeIcon icon={faLinkedin} title="LinkedIn" size="2x" />
    </ListItem>
    <ListItem
      onClick={() => {
        window.open("https://twitter.com/sachinmv31", "_blank");
      }}
      style={{ cursor: "pointer" }}
    >
      <FontAwesomeIcon icon={faTwitter} title="Twitter" size="2x" />
    </ListItem>
    <ListItem
      onClick={() => {
        window.open("https://github.com/SachinVarghese", "_blank");
      }}
      style={{ cursor: "pointer" }}
    >
      <FontAwesomeIcon icon={faGithub} title="GitHub" size="2x" />
    </ListItem>
  </div>
);
