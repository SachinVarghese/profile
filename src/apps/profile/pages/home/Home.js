import React from "react";
import styles from "./home.module.css";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import SkillScene from "./SkillScene";

class Home extends React.Component {
  render() {
    return (
      <Paper className={styles.mainBackground} id="skill_scene" >
      <div className={styles.mainTextCover}>
        <Typography
          variant="display2"
          className={styles.mainText}
          align="center"
        >
          Hello! I'm Sachin, <br /> Engineer, Researcher, Developer.
        </Typography>
        </div>
      </Paper>
    );
  }
  componentDidMount() {
    SkillScene("skill_scene");
  }
}

export default Home;
