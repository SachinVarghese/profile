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
import Person from "@material-ui/icons/Person";
import TimeLine from "@material-ui/icons/Timeline";
import Star from "@material-ui/icons/Star";
import Explore from "@material-ui/icons/Explore";
import classNames from "classnames";
import { navigate } from "@reach/router";

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
    <ListItem
      disableGutters
      button
      onClick={() => {
        navigate(basepath + "/about");
      }}
      style={{ cursor: "pointer", transform: "scale(1.1)", margin: "0px 10px" }}
    >
      <Person />
      <ListItemText
        primary="Prologue"
        primaryTypographyProps={{ color: "primary" }}
      />
    </ListItem>
    <ListItem
      disableGutters
      button
      onClick={() => {
        navigate(basepath + "/timeline");
      }}
      style={{ cursor: "pointer", transform: "scale(1.1)", margin: "0px 10px" }}
    >
      <TimeLine />

      <ListItemText
        primary="Timeline"
        primaryTypographyProps={{ color: "primary" }}
      />
    </ListItem>
    <ListItem
      disableGutters
      button
      onClick={() => {
        navigate(basepath + "/skill");
      }}
      style={{ cursor: "pointer", transform: "scale(1.1)", margin: "0px 10px" }}
    >
      <Star />

      <ListItemText
        primary="Skills"
        primaryTypographyProps={{ color: "primary" }}
      />
    </ListItem>
    <ListItem
      disableGutters
      button
      onClick={() => {
        navigate(basepath + "/avocation");
      }}
      style={{ cursor: "pointer", transform: "scale(1.1)", margin: "0px 10px" }}
    >
      <Explore />

      <ListItemText
        primary="Avocations"
        primaryTypographyProps={{ color: "primary" }}
      />
    </ListItem>
  </div>
);

const ConnectLinks = (
  <div style={{ display: "flex" }}>
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
