import React from "react";
import styles from "./app.module.css";
class Loading extends React.Component {
  render() {
    return (
      <div className={styles["full-size-d-flex-column-centralized"]}>
        Loading ...
      </div>
    );
  }
}

export default Loading;
