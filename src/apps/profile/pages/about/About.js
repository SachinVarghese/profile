import React from "react";
import styles from "./about.module.css";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";

class About extends React.Component {
  render() {
    return (
      <div className={styles.mainBackground}>
        <div className={classNames(styles.outerContent)}>
          <Typography
          className={styles["textHeader"]}
          variant="display1"
          >
            The Wide Web World
          </Typography>
          <Typography
          className={styles["textContent"]}
            variant="subheading"
            align="justify"
          >
            I am a collaborator to the wide web world. I am an engineer,
            researcher and developer contributing towards modern web
            applications.
          </Typography>
          <Typography
          className={styles["textContent"]}
            variant="subheading"
            align="justify"
          >
            The World Wide Web was invented by British scientist Tim Berners-Lee
            in 1989 while working at CERN. An invention for the basic need of
            efficient information sharing has created the internet that we see
            today. Data visualization, digital media and virtual experiences are
            prime examples of new age information sharing capabilities. But I
            believe that there is more to come. Humans are already experimenting
            with sharing AI powered inferences and even quantum computation on
            the web. It is really an interesting time to be sharing this new age
            information.
          </Typography>

          <Typography
          className={styles["textContent"]}
            variant="subheading"
            align="justify"
          >
            The web has made a lot of data and information accessible to the
            world. But in order to effectively utilize this massive bits in the
            form of electrical energy, they need to be presented in a manner
            that is easily understandable to the human brain. I find this aspect
            of software development extremely interesting and hence, user
            interface development and data visualization has been a massive part
            of my work experience. The evolution of user interfaces has been
            very rapid considering the fact that we were working with simple
            markup text two decades back and now we are starting to see advanced
            Virtual Reality devices in the market. And now web apps are
            everywhere - Desktop, Mobile and even VR.
          </Typography>

          <Typography
          className={styles["textContent"]}
            variant="subheading"
            align="justify"
          >
            Web requests involve data retrieval, manipulation or computation for
            many real world use cases. Data compuation happens at every level in
            the digital world from user interfaces to storage solutions. A lot
            of research is still being carried out to efficiently compute data
            both in terms of resources utilization and the latency. The major
            toolkit that I work on is Golang, C++ and Javascript. I have been
            creating data procesing pipelines and API servers for applications
            in advanced analytics, machine learning inferences and serving on
            the cloud.
          </Typography>
          <Typography
          className={styles["textContent"]}
            variant="subheading"
            align="justify"
          >
            Also, I am an open source advocate, in my opinion, an open
            constructive collaboration of different people across the globe is
            the most productive way for any technological advancement. Thus,
            making innovative solutions more efficient, inexpensive and easily
            accessible is the way for the future. My perspective is corroborated
            by the huge number of top tier companies that are adopting open
            source solutions in their technological products.
          </Typography>
          <Typography
          className={styles["textContent"]}
            variant="subheading"
            align="justify"
          >
            I am looking forward to more learning, experimenting and open source
            collaboration that could shape our future!!
          </Typography>
        </div>
      </div>
    );
  }
}

export default About;
