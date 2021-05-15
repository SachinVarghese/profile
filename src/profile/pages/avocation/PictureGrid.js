import React from "react";
import styles from "./avocation.module.css";
import PictureCard from "./PictureCard";
import Pictures from "./avocations.json";

class PictureGrid extends React.Component {
  render() {
    return (
      <div className={styles.picsContainer}>
        {Pictures.map(pic => {
          const images = require.context(`./pics`, true);
          return <PictureCard key={pic.name} src={images(`${pic.src}`).default} />;
        })}
      </div>
    );
  }
}

export default PictureGrid;
