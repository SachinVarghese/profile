import React from "react";
import styles from "./skill.module.css";
import Typography from "@material-ui/core/Typography";

class Skill extends React.Component {
  render() {
    return (
      <div className={styles.mainBackground}>
        <Typography
          variant="display1"
          component="h3"
          className={styles.textHeader}
        >
          Skills and Expertise
        </Typography>
        <div className={styles.mainBackground} />
      </div>
    );
  }
}

export default Skill;
