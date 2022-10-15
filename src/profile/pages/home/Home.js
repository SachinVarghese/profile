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
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 5,
              padding: "0% 5%",
              marginTop: 30,
            }}
          >
            <Paper className={styles.imgBackground}>
              <div className={styles.mainTextCover}>
                <Typography
                  variant="display1"
                  className={styles.mainText}
                  align="center"
                >
                  Hello! I'm Sachin <br /> Software Engineer, Researcher,
                  Developer
                </Typography>
              </div>
            </Paper>

            <div
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ padding: 5 }}>
                <Typography
                  variant="subheading"
                  className={styles.text}
                  color="secondary"
                >
                  Areas of Interest
                </Typography>
                <Typography variant="headline" className={styles.text}>
                  OLAP data stores, Stream processing & Real-time analytics
                </Typography>
                <Typography variant="headline" className={styles.text}>
                  ML model deployment - Seldon Core, MLServer, TensorFlow
                </Typography>
                <Typography variant="headline" className={styles.text}>
                  ML data observability - Outliers & Drift detection
                </Typography>
                <Typography variant="headline" className={styles.text}>
                  Data Visualization on the Web - D3, ReactJS
                </Typography>
                <Typography variant="headline" className={styles.text}>
                  Cloud Technologies - Kubernetes, Docker, Gitops
                </Typography>
                <Typography
                  variant="subheading"
                  className={styles.text}
                  color="secondary"
                >
                  Programming Languages
                </Typography>
                <Typography variant="headline" className={styles.text}>
                  Golang - Python - Javascript
                </Typography>
              </div>
              <iframe
                height="300"
                title="Linkdin Badge"
                src="/profile/linkdin-badge.html"
                style={{ border: "none", minWidth: 350 }}
              ></iframe>
            </div>
          </div>
          <svg
            id="skill-scene"
            className={styles.dualBackground}
            style={{ flex: 4, marginTop: 30 }}
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
