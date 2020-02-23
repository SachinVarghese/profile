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
              Web Technologies and Frameworks
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              User Interface design HTML and CSS
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              API Design REST, Web Sockets, gRPC
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              NodeJS, NPM, Electron
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              ReactJS, JSX, ECMA Script
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              SVG, WebGL, D3, ThreeJS
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              TensorFlowJS, Chatbots
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              Messaging Queues and Data Pipelines
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              Databases - Postgres, MySQL, Elasticsearch, MongoDB
            </Typography>
            <Typography variant="title" className={styles.text} color="primary">
              Development Cycle and Operations
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              Git, Docker, Kubernetes
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
