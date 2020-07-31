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
            The tale of me and the wide web world
          </Typography>
          <Typography
            className={styles["textContent"]}
            variant="subheading"
            align="justify"
          >
            Today web based applications power the world, they are everywhere -
            desktop, cloud and even the edge. The web has become the medium of
            all the knowledge the world has acquired. So, it is of great
            interest for me to create applications that contribute to the
            development of this technology. I enjoy creating data procesing
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
            today. Data visualization, digital media and virtual experiences are
            prime examples of new age information sharing capabilities. But I
            believe that there is more to come. Humans are already experimenting
            with sharing AI powered inferences and even quantum computation on
            the web. It is really an interesting time to be working on the Web.
          </Typography>

          <Typography
            className={styles["textContent"]}
            variant="subheading"
            align="justify"
          >
            The web has made a lot of data and information accessible to the
            world. But in order to effectively utilize this massive amount of
            bits in the form of electrical energy, they need to be presented in
            a manner that is easily understandable to the human brain. I find
            this aspect of software development extremely interesting and hence,
            user interface development and data visualization has been a massive
            part of my work experience. The evolution of user interfaces has
            been very rapid considering the fact that we were working with
            simple markup text two decades back and now we are starting to see
            advanced virtual reality devices in the market. Web requests involve
            data retrieval, manipulation or computation for many real world use
            cases. Data compuation happens at every level in the digital world
            from user interfaces to storage solutions to data encoding and error
            control. A lot of interesting research is being carried out to
            efficiently compute both in terms of resources utilization and the
            latency.
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
            solutions in their technological products.
          </Typography>
          <Typography
            className={styles["textContent"]}
            variant="subheading"
            align="justify"
          >
            I am looking forward to more discussions, experiments and
            collaborations that could shape our future.
          </Typography>
        <div
          class="LI-profile-badge"
          data-version="v1"
          data-size="large"
          data-locale="en_US"
          data-type="horizontal"
          data-theme="dark"
          data-vanity="sachinmv"
          style={{marginTop:50}}
        >
          <a
            class="LI-simple-link"
            href="https://uk.linkedin.com/in/sachinmv?trk=profile-badge"
          >
            Sachin Mathew Varghese
          </a>
        </div>
        </div>
      </div>
    );
  }
}

export default About;
