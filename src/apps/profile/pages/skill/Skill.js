import React from "react";
import styles from "./skill.module.css";
import Typography from "@material-ui/core/Typography";
import SkillScene from "./SkillScene";

class Skill extends React.Component {
  render() {
    return (
      <div className={styles.mainBackground}>
        <Typography
          variant="display1"
          component="h3"
          align="center"
          className={styles.textHeader}
        >
          Skills and Expertise
        </Typography>
        <div id="skill_scene" className={styles.sceneBackground} />
      </div>
    );
  }

  componentDidMount() {
    SkillScene("skill_scene");
  }
}

export default Skill;
