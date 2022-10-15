import React from "react";
import styles from "./about.module.css";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Star from "@material-ui/icons/Star";
import PictureGrid from "./PictureGrid";

class About extends React.Component {
  render() {
    return (
      <div className={styles.mainBackground}>
        <div className={classNames(styles.outerContent)}>
          <Typography className={styles["textHeader"]} variant="display1">
            The tale of me and intelligent sharable software systems
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
        </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            contentArrowStyle={{
              transform: "scale(2)",
              borderRight: "10px solid  rgb(16, 204, 82)",
            }}
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<Star />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineer, Seldon
            </h3>
            <h4 className="vertical-timeline-element-subtitle">2019-Present</h4>
            <p>
              I am working as a part of the tech team at Seldon in London,
              United Kingdom, currently. I find myself continuing on my journey
              building products to streamline machine learning deployment
              processes in the complex enterprise ecosystems. At the same time,
              it is great to be part of an open core organisation.
              <a href="https://www.seldon.io/tech/products/deploy/">
                {" Seldon Deploy"}
              </a>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentArrowStyle={{
              transform: "scale(2) rotateY(180deg)",
              borderRight: "10px solid  rgb(33, 150, 243)",
            }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<Star />}
          >
            <h3 className="vertical-timeline-element-title">
              Senior Developer, Mu Sigma
            </h3>
            <h4 className="vertical-timeline-element-subtitle">2017-2019</h4>
            <p>
              Lead a tech team at Mu Sigma Labs as a senior software developer
              working on multiple projects for machine learning model
              operationalization, simulations environments and service
              availability. This was a different challenge that I found quite
              enjoyable not only growing as an organised developer but improving
              my leadership skills.
              <a href="https://www.mu-sigma.com/our-platform/big-data-analytics-software/data-analytics-platform-muiot/">
                {" Operationalization Platform"}
              </a>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentArrowStyle={{
              transform: "scale(2)",
              borderRight: "10px solid  rgb(33, 150, 243)",
            }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<Star />}
          >
            <h3 className="vertical-timeline-element-title">
              Developer, Mu Sigma
            </h3>
            <h4 className="vertical-timeline-element-subtitle">2016-2017</h4>
            <p>
              I was promoted to the role of a Developer to create a new range of
              in-house products that can be leveraged by the data scientists and
              business analysts in the organisations. This involved creating
              data pipelines, monitoring dashboards, control systems and user
              interfaces that assist with the daily machine learning workflows.
              This was an extremely energetic workplace where I build new
              projects, improved my skills, progressed developer and also
              started my very first open source contributions.
              <a href="https://www.mu-sigma.com/our-platform/big-data-analytics-software">
                {" Data Analytics Solutions"}
              </a>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentArrowStyle={{
              transform: "scale(2) rotateY(180deg)",
              borderRight: "10px solid  rgb(33, 150, 243)",
            }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<Star />}
          >
            <h3 className="vertical-timeline-element-title">
              Trainee Decision Scientist, Mu Sigma
            </h3>
            <h4 className="vertical-timeline-element-subtitle">2015-2016</h4>
            <p>
              I joined the Open research wing of the innovation and development
              team at Mu Sigma Inc in Bangalore, India. This was a really
              exciting start to a tech career reading, researching, analyzing ,
              writing whitepapers and other documentations on how new upcoming
              technologies can be embedded into the organization ecosystem.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentArrowStyle={{
              transform: "scale(2)",
              borderRight: "10px solid  rgb(233, 30, 99)",
            }}
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<Star />}
          >
            <h3 className="vertical-timeline-element-title">
              Research Intern, CERN
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Summer 2014</h4>
            <p>
              I worked as a research intern at the TIF Lab, Large Hadron
              Collider site, CERN in Geneva, Switzerland. I was involved in the
              muon detection project and also developed and installed a weather
              monitoring system that streams the live environment data in the
              lab.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentArrowStyle={{
              transform: "scale(2) rotateY(180deg)",
              borderRight: "10px solid  rgb(252, 182, 3)",
            }}
            iconStyle={{ background: "rgb(252, 182, 3)", color: "#fff" }}
            icon={<Star />}
          >
            <div>
              <h3 className="vertical-timeline-element-title">
                Bachelors in Technology, NIT Goa
              </h3>
              <h4 className="vertical-timeline-element-subtitle">2011-2015</h4>
              <p>
                I graduated in Electronics and Communication Engineering from
                National Institute of Technology, Goa. This was my university
                experience learning about circuits, programming and computers.
              </p>
            </div>
            <PictureGrid />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
            icon={<Star />}
          />
        </VerticalTimeline>
      </div>
    );
  }
}

export default About;
