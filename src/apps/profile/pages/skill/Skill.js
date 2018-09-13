import React from "react";
import styles from "./skill.module.css";
import Typography from "@material-ui/core/Typography";
import SkillChart from "./SkillChart";
import data from "./data.js";

class Skill extends React.Component {
  render() {
    return (
      <div className={styles.mainBackground}>
        <Typography
          variant="display1"
          component="h3"
          align="center"
          color="textPrimary"
          className={styles.textHeader}
        >
          Skills and Experience
        </Typography>
        <div className={styles.sceneBackground}>
          <div
            className={styles.dualBackground}
            style={{ width: "40%", paddingLeft: 20, margin: "auto" }}
          >
            <Typography variant="title" className={styles.text} color="primary">
              Programming Paradigms and Languages
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              Object Oriented Programming - Python, C++
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              Functional Programming - Javascript(ES), Elixir
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              Scripting Languages - MATLAB, R
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
              NodeJS, NPM, Webpack Bundling
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              ReactJS, JSX, React Native
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              D3.js, React-vis, WebGL, ThreeJS
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              Deep Learning with Scikit-learn, TensorFlow
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              Chatbots, Messaging Queues and Data Pipelines
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              Databases - Postgres, MySQL, Elasticsearch, MongoDB
            </Typography>
            <Typography variant="title" className={styles.text} color="primary">
              Development Cycle and Operations
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              Continous Delivery - Gitlab CI/CD Pipelines, Jenkins
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              Docker, S2I, Seldon-Core, Kubernetes
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
