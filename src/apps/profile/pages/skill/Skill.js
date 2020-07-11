import React from "react";
import styles from "./skill.module.css";
import Typography from "@material-ui/core/Typography";
import SkillChart from "./SkillChart";
import data from "./data.js";

class Skill extends React.Component {
  render() {
    return (
      <div className={styles.mainBackground}>
        <div className={styles.sceneBackground}>
          <div
            className={styles.dualBackground}
            style={{ width: "40%", paddingLeft: 20, margin: "auto" }}
          >
            <Typography variant="title" className={styles.text} color="primary">
              Programming Languages
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              C++, Golang, Javascript
            </Typography>
            <Typography variant="title" className={styles.text} color="primary">
              Technologies and Frameworks
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              Web Server Design, REST, Web Sockets, gRPC
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              Kubeflow, TensorFlow, ML Serving
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              NoSQL Databases, Cloud Object Storage, ML metadata
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              Data visualization with React, WebGL, D3, ThreeJS
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              UI design HTML/CSS, JS, JSX, ECMA Script
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              Desktop Applications, NodeJS, Electron
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              Data Streams, Messaging Queues and Pipelines
            </Typography>
            <Typography variant="title" className={styles.text} color="primary">
              Development Cycle and Operations
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              GitOps, CI/CD processes
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              Docker, Kubernetes
            </Typography>
          </div>
          <svg
            id="skill_scene"
            className={styles.dualBackground}
            style={{ width: "60%" }}
          />
        </div>
      </div>
    );
  }

  componentDidMount() {
    SkillChart("skill_scene", data);
  }
}

export default Skill;
