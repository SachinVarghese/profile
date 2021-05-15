import React from "react";
import styles from "./about.module.css";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";

class About extends React.Component {
  render() {
    return (
      <div className={styles.mainBackground}>
        <div className={classNames(styles.outerContent)}>
          <Typography className={styles["textHeader"]} variant="display1">
            The tale of me and some intelligent sharable software systems
          </Typography>
          <Typography
            className={styles["textContent"]}
            variant="subheading"
            align="justify"
          >
            Humans have always been attracted to new, complex and challenging
            ideas. We get easily bored by monotonous tasks and always are in a
            quest to solve difficult problems and answers to the unknown. Along
            our journey, we have developed machines to help us with the dull
            tasks of our everyday life and also assist us in solve some
            interesting challenges. Today the macines are being programmed to
            make important intelligent decisions that directly affect human
            lives.
          </Typography>
          <Typography
            className={styles["textContent"]}
            variant="subheading"
            align="justify"
          >
            As a 21st century homo sapien, it is in my DNA to find and work on
            interesting problems. One of the biggest challenges in the current
            era is the development, rollout and operationalization of
            intelligent machines.Today intelligent applications power the world,
            they are everywhere - desktop, cloud and even the edge. Hence, it is
            of great interest for me to contribute to the development of this
            technology. I enjoy creating cloud servers, data procesing
            pipelines, control systems and user interfaces for applications in
            machine learning operationaliztion, advanced analytics and serving
            on the cloud.
          </Typography>
          <Typography
            className={styles["textContent"]}
            variant="subheading"
            align="justify"
          >
            The World Wide Web was invented by British scientist Tim Berners-Lee
            in 1989 while working at CERN. An invention for the basic need of
            efficient information sharing has created the internet that we see
            today. The web has become the medium of all the knowledge the world
            has acquired. Software sharing, virtual currency and augumented
            reality are prime examples of new age information sharing
            capabilities. But I am sure that there is more to come. We are
            already experimenting with AI powered inferences and even quantum
            computation on the web. It is really an interesting time to be
            working on the <b>intelligent sharable software systems</b>. The web
            has made a lot of data and information accessible to the world. But
            in order to effectively utilize this massive amount of bits in the
            form of electrical energy, they need to be presented in a manner
            that is easily understandable to the human brain. I find this aspect
            of software development extremely interesting and hence, data
            practices, API design, user interfaces and explainability and
            visualization of software has been a vital part of my work.
          </Typography>
          <Typography
            className={styles["textContent"]}
            variant="subheading"
            align="justify"
          >
            Also, I am an open source advocate, in my opinion, an open
            constructive collaboration from people across the globe is the most
            productive way for any technological advancement. Thus, making
            innovative solutions more efficient, inexpensive and easily
            accessible is the way for the future. My perspective is corroborated
            by the huge number of people open sourcing and adopting these
            solutions in their technological products in the recent past.
          </Typography>
          <Typography
            className={styles["textContent"]}
            variant="subheading"
            align="justify"
          >
            I am looking forward to more discussions, experiments and
            collaborations that could shape our future.
          </Typography>
          <iframe
            height="320"
            width="350"
            title="Linkdin Badge"
            src="/profile/linkdin-badge.html"
            style={{ border: "none" }}
          ></iframe>
        </div>
      </div>
    );
  }
}

export default About;
