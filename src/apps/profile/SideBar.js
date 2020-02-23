import React from "react";
import styles from "./profile.module.css";
import Drawer from "@material-ui/core/Drawer";
import Avatar from "@material-ui/core/Avatar";
import displayPicture from "../../assets/me.jpeg";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
  faTwitter,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import Home from "@material-ui/icons/Home";
import Person from "@material-ui/icons/Person";
import TimeLine from "@material-ui/icons/Timeline";
import Star from "@material-ui/icons/Star";
import Explore from "@material-ui/icons/Explore";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { navigate } from "@reach/router";

const drawerWidth = 300;
const basepath = "/profile";

const styler = theme => {
  return {
    drawerPaper: {
      position: "relative",
      whiteSpace: "nowrap",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerPaperClose: {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing.unit * 7,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing.unit * 9
      }
    }
  };
};

class SideBar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classNames(
            classes.drawerPaper,
            !this.props.open && classes.drawerPaperClose
          )
        }}
        open={this.props.open}
        onMouseOver={this.props.trigger}
        onMouseOut={this.props.close}
      >
        <div style={{ minHeight: 70, marginTop: 20, marginBottom: 20 }}>
          <Avatar
            alt="Sachin"
            src={displayPicture}
            className={classNames(
              styles.avatar,
              this.props.open && styles.hide
            )}
          />
          <Avatar
            alt="Sachin Varghese"
            src={displayPicture}
            className={classNames(
              styles.Avatar,
              !this.props.open && styles.hide
            )}
          />
          <Typography
            variant="subheading"
            className={classNames(
              styles.intro,
              !this.props.open && styles.hide
            )}
            noWrap={false}
          >
            Hello! I'm Sachin.
            <br /> I'm a developer &#128526;
          </Typography>
        </div>
        <Divider />
        <List>{PageLinks}</List>
        <Divider />
        <List>{ConnectLinks}</List>
        <Divider />
      </Drawer>
    );
  }
}

export default withStyles(styler, { withTheme: true })(SideBar);

const PageLinks = (
  <div>
    <ListItem
      button
      onClick={() => {
        navigate(basepath);
      }}
    >
      <ListItemIcon>
        <Home />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem
      button
      onClick={() => {
        navigate(basepath + "/about");
      }}
    >
      <ListItemIcon>
        <Person />
      </ListItemIcon>
      <ListItemText primary="About" />
    </ListItem>
    <ListItem
      button
      onClick={() => {
        navigate(basepath + "/timeline");
      }}
    >
      <ListItemIcon>
        <TimeLine />
      </ListItemIcon>
      <ListItemText primary="Timeline" />
    </ListItem>
    <ListItem
      button
      onClick={() => {
        navigate(basepath + "/skill");
      }}
    >
      <ListItemIcon>
        <Star />
      </ListItemIcon>
      <ListItemText primary="Skills" />
    </ListItem>
    <ListItem
      button
      onClick={() => {
        navigate(basepath + "/avocation");
      }}
    >
      <ListItemIcon>
        <Explore />
      </ListItemIcon>
      <ListItemText primary="Avocations" />
    </ListItem>
  </div>
);

const ConnectLinks = (
  <div>
    <ListItem
      button
      onClick={() => {
        window.open("https://www.linkedin.com/in/sachinmv/", "_blank");
      }}
    >
      <ListItemIcon>
        <FontAwesomeIcon icon={faLinkedin} />
      </ListItemIcon>
      <ListItemText primary="LinkedIn" />
    </ListItem>
    <ListItem
      button
      onClick={() => {
        window.open("https://twitter.com/SachinMV31", "_blank");
      }}
    >
      <ListItemIcon>
        <FontAwesomeIcon icon={faTwitter} />
      </ListItemIcon>
      <ListItemText primary="Twitter" />
    </ListItem>
    <ListItem
      button
      onClick={() => {
        window.open("https://www.facebook.com/sachin.varghese.127", "_blank");
      }}
    >
      <ListItemIcon>
        <FontAwesomeIcon icon={faFacebookSquare} />
      </ListItemIcon>
      <ListItemText primary="Facebook" />
    </ListItem>
    <ListItem
      button
      onClick={() => {
        window.open("https://github.com/SachinVarghese", "_blank");
      }}
    >
      <ListItemIcon>
        <FontAwesomeIcon icon={faGithub} />
      </ListItemIcon>
      <ListItemText primary="GitHub" />
    </ListItem>
  </div>
);
