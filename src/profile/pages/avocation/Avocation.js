import React from "react";
import styles from "./avocation.module.css";
import PictureGrid from "./PictureGrid";
import Typography from "@material-ui/core/Typography";

class Avocation extends React.Component {
  render() {
    return (
      <div className={styles.mainBackground}>
        <div className={styles.textContent}>
          <Typography
            variant="display1"
            component="h3"
            className={styles.textHeader}
            color="textPrimary"
            align="center"
          >
            Avocations and Interests
          </Typography>
          <Typography
            variant="display1"
            align="justify"
            color="textPrimary"
            className={styles.textBody}
          >
            I am a big sports enthusiast especially, basketball and football. I
            have been playing and watching basketball since school life. I have
            been a part of the senior college team, lead the team and
            participated in multiple tournaments across the country. I am an
            avid follower of NBA teams and also happy to still indulge in the
            workplace basketball club activities. My other hobbies would be
            playing chess, in fact, I would love any strategy board game.
          </Typography>
        </div>
        <div className={styles.picContent}>
          <PictureGrid />
        </div>
      </div>
    );
  }
}

export default Avocation;
