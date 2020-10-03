import React from "react";
import styles from "./avocation.module.css";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

function PictureCard(props) {
  return (
    <Card className={styles.card} raised>
      <CardMedia
        className={styles.media}
        image={props.src}
        title={props.name}
      />
    </Card>
  );
}

export default PictureCard;
