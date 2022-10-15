import React from "react";
import styles from "./home.module.css";
import Typography from "@material-ui/core/Typography";
import SkillChart from "./SkillChart";
import Paper from "@material-ui/core/Paper";
import data from "./data.js";

class Skill extends React.Component {
  render() {
    return (
      <div className={styles.mainBackground}>
        <div className={styles.sceneBackground}>
          <div
            className={styles.dualBackground}
            style={{ flex: 1, padding: "0% 5%", marginTop: 50 }}
          >
            <Paper className={styles.imgBackground}>
              <div className={styles.mainTextCover}>
                <Typography
                  variant="title"
                  className={styles.mainText}
                  align="center"
                >
                  Hello! I'm Sachin <br /> Software Engineer, Researcher,
                  Developer
                </Typography>
              </div>
            </Paper>

            <Typography
              variant="headline"
              className={styles.text}
              color="secondary"
            >
              Areas of Interest
            </Typography>
            <Typography variant="display1" className={styles.text}>
              Real-time data analytics & Kafka stream processing
            </Typography>
            <Typography variant="display1" className={styles.text}>
              OLAP data stores & batch processing workflows
            </Typography>
            <Typography variant="display1" className={styles.text}>
              Data observability - outliers & drift detection metrics
            </Typography>
            <Typography variant="display1" className={styles.text}>
              Data visualization - web technologies - D3, ReactJS
            </Typography>
            <Typography variant="display1" className={styles.text}>
              ML deployments with Seldon Core, MLServer, TensorFlow
            </Typography>
            <Typography variant="display1" className={styles.text}>
              Cloud technologies - Kubernetes, Docker, Gitops
            </Typography>
            <div style={{ display: "flex", margin: "40px 0px" }}>
              <iframe
                height="320"
                width="350"
                title="Linkdin Badge"
                src="/profile/linkdin-badge.html"
                style={{ border: "none" }}
              ></iframe>
              <div style={{ padding: 30 }}>
                <Typography
                  variant="headline"
                  className={styles.text}
                  color="secondary"
                >
                  Programming Languages
                </Typography>
                <Typography variant="display1" className={styles.text}>
                  - Golang <br /> - Python <br /> - Javascript
                </Typography>
              </div>
            </div>
          </div>
          <svg
            id="skill-scene"
            className={styles.dualBackground}
            style={{ flex: 1, marginTop: 50 }}
          />
        </div>
      </div>
    );
  }

  componentDidMount() {
    SkillChart("skill-scene", data);
  }
}

export default Skill;
