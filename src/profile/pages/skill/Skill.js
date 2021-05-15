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
              Golang, C++, Javascript, Python
            </Typography>
            <Typography variant="title" className={styles.text} color="primary">
              Technologies and Frameworks
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              Cloud Servers and APIs - Cloud Events, REST, Web Sockets, gRPC
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              Containerization - Docker, Kubernetes, Distroless
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              MLOPs - Seldon, Kubeflow KFServing, TensorFlow Serving
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              Data Streams, Messaging Queues and Kafka Pipelines
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              Databases - Relational, NoSQL, Object Storage, Metrics
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              Data visualization - HTML, React, WebGL, D3, ThreeJS
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              Desktop Applications - NodeJS, Electron, Documenation
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              Source Control - Declarative infrastructure, GitOps, CI/CD processes, 
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
