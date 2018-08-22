import React from "react";
import styles from "./about.module.css";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";

class About extends React.Component {
  render() {
    return (
      <div className={styles.mainBackground}>
        <div className={classNames(styles.dualContent, styles.textBlock)}>
          <Typography
            variant="display1"
            component="h3"
            className={styles.textHeader}
            color="textPrimary"
          >
            The Story
          </Typography>
          <Typography
            variant="body1"
            component="p"
            align="justify"
            className={styles.textContent}
            color="textPrimary"
          >
            Everything started with a passion for technology. Learning Computer
            Science at school along with a strong affinity towards Computer
            Games kindled my very first idea of a computer world. Today, I am a
            software developer building interactive applications across domains
            like Data Science, Artificial Intelligence and Web Technologies.
          </Typography>
          <Typography
            variant="display1"
            component="h3"
            className={styles.textHeader}
            color="textPrimary"
          >
            Thoughts and Ideas
          </Typography>
          <Typography
            variant="body1"
            component="p"
            align="justify"
            className={styles.textContent}
            color="textPrimary"
          >
            I believe that smarter computer systems will surely make human lives
            much easier and enjoyable. So the concept of creating interfaces
            that bridge the disparity between the Man and the Machine by making
            machines intelligent enough to operate in the human world is highly
            fascinating for me. <br />
            <br />
            Also, I am an open source advocate, in my opinion, an open
            constructive collaboration of different people across the globe is
            the most productive way for any technological advancement. Thus,
            making innovative solutions more efficient, inexpensive and easily
            accessible is the way for the future. My perspective is corroborated
            by the huge number of top tier companies that are adopting open
            source solutions in their technological products.
          </Typography>
        </div>

        <div className={classNames(styles.dualContent, styles.textBlock)}>
          <Typography
            variant="display1"
            component="h3"
            className={styles.textHeader}
            color="textPrimary"
          >
            Experience and Education
          </Typography>
          <Typography
            variant="body1"
            component="p"
            align="justify"
            className={styles.textContent}
            color="textPrimary"
          >
            I am a currently working as a member of the Innovation and
            Development team at Mu Sigma Inc at Bangalore. At MuSigma, the
            world’s largest provider of analytics and decision science
            solutions, I have had the oppurtunity to work on a eclectic variety
            of computer languages, technology stacks, and problem spaces that I
            consider myself a polyglot even in this domain. I endeavour to keep
            myself educated on most of the latest technological advancements in
            order to bolster my research and development of applications and
            tools that we create at Mu Sigma Inc.
            <br />
            <br />I hold a Graduate Degree of Bachelors in Technology from
            National Institute of Technology, Goa in Electronics and
            Communication Engineering. During graduation, I worked on several
            projects in the field of Data analysis, Pattern Recognition and
            Machine Learning. Also, I have an internship experience at the CERN
            LHC site in Geneva where I worked on research projects on Data
            extraction, Internet of Things, and Streaming Data Visualization.
          </Typography>

          <Typography
            variant="display1"
            component="h3"
            className={styles.textHeader}
            color="textPrimary"
          >
            Up Next
          </Typography>
          <Typography
            variant="body1"
            component="p"
            align="justify"
            className={styles.textContent}
            color="textPrimary"
          >
            I am looking forward to more learning, experimenting and open source
            collaboration in the areas of Intelligent Software Development and
            Interfaces. Always up for a chat or even a constructive debate on
            ideas that could shape the future!!
          </Typography>
        </div>
      </div>
    );
  }
}

export default About;
