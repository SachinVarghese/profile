import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import styles from "../../app.module.css";

class Profile extends React.Component {
  render() {
    return (
      <Paper className={styles.fullSize} elevation={1}>
        <Typography variant="headline" component="h3">
          Welcome to the profile.
        </Typography>
      </Paper>
    );
  }
}
export default Profile;
