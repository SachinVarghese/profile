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
            I am a big time sports enthusiast especially, basketball and soccer.
            I have been playing and watching basketball since school life. I
            have been a part of the senior college team, lead the team as the
            captain for more than a year and participated in multiple
            tournaments across the country. I am an avid follower of NBA teams
            and also happy to still indulge in the workplace basketball club
            activities.
            <br />
            <br />
            My other hobbies would be playing chess, in fact, I would love any
            strategy game. And lastly I would love to travel. Though this
            something that I have not been able to indulge in much lately, I
            hope to travel as much as possible!
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
