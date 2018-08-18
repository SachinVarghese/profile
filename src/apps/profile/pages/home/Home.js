import React from "react";
import styles from "./home.module.css";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

class Home extends React.Component {
  render() {
    return (
      <Paper className={styles.mainBackground}>
        <div className={styles.mainTextCover}>
          <Typography
            variant="display2"
            className={styles.mainText}
            align="center"
          >
            Hello! I'm Sachin, <br /> Explorer, Researcher, Developer.
          </Typography>
        </div>
      </Paper>
    );
  }
}

export default Home;
