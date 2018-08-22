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
            style={{ width: "40%", paddingLeft: 20 }}
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
              HTML, CSS and REST APIs
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              NodeJS, NPM, Webpack
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              ReactJS, JSX, React Native
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              WebGL, ThreeJS, TensorFlowJS
            </Typography>
            <Typography variant="title" className={styles.text} color="primary">
              Database and Computaional Technologies
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              Relational Databeses - MySQL, Postgres
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              NoSQL Databases - Elasticsearch, MongoDB
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              HDFS, Spark, Structured Streaming
            </Typography>
            <Typography variant="title" className={styles.text} color="primary">
              Development Cycle and Operations
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              Continous Delivery - Gitlab CI/CD Pipelines
            </Typography>
            <Typography variant="subheading" className={styles.text}>
              Scaling and Monitoring - Docker & Kubernetes
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
