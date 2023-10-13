import React from "react";
import styles from "./home.module.css";
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
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 5,
              padding: "0% 5%",
              marginTop: 300,
            }}
          >
            <iframe
              height="300"
              title="Linkdin Badge"
              src="/profile/linkdin-badge.html"
              style={{ border: "none", minWidth: 350 }}
            ></iframe>
            <div className={styles.imgBackground}
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
                  Applied AI and MLOps - Triton, MLServer, Seldon Core, Kubeflow
                </Typography>
                <Typography variant="headline" className={styles.text}>
                  Data storage & search -  Vector stores, embeddings, similarity search
                </Typography>
                <Typography variant="headline" className={styles.text}>
                  Data pipelines, stream processing & real-time analytics and visualization
                </Typography>
                <Typography variant="headline" className={styles.text}>
                  ML Observability tools - Outlier & data distribution drift detection
                </Typography>
                <Typography variant="headline" className={styles.text}>
                  LLM applications, prompt engineering and retrieval augmented generation
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
