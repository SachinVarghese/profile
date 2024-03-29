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
          <Typography
            className={styles["textHeader"]}
            variant="display1"
            align="center"
          >
            About me and the journey so far..
          </Typography>
          <Typography
            className={styles["textContent"]}
            variant="title"
            align="justify"
          >
            I am Sachin Varghese. I introduce myself as a software engineer and
            a technology researcher.
            <br />
            These two are the main professional roles that I thoroughly enjoy
            and see myself stepping into on a daily basis.
          </Typography>
          <Typography
            className={styles["textContent"]}
            variant="title"
            align="right"
          >
            Today, we have created many smart software systems that make
            important decisions in our lives. <br />
            Such artificially intelligent applications are literally everywhere
            - desktop, cloud, and edge devices. <br />
            But still, continous deployment, monitoring and maintenance of such
            AI systems remains a huge challenge.
            <br />
          </Typography>
          <Typography
            className={styles["textContent"]}
            variant="title"
            align="justify"
          >
            It is of great interest for me to contribute towards building
            accurate, scalable and observalble AI systems.
            <br /> I build software applications and data observability
            solutions to manage and monitor AI deployments at scale. <br />
            My key areas of interest are,
            <br />
            <br />
            &#9733; Applied AI & MLOps <br />
            &#9733; Data observability & analytics
          </Typography>

          <Typography
            className={styles["textContent"]}
            variant="title"
            align="right"
          >
            I am an advocate for open source software. I feel that my
            perspective is validated by the growing adoption of OSS projects.
            <br />
            I stongly belive that constructive collaboration by contributors
            across the globe is the only sustainable way forward.
            <br />I look forward to more discussions, experimentations and
            collaborations that could shape our common future.
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
            <h4 className="vertical-timeline-element-subtitle">2019-2023</h4>
            <p>
              I am currently working in London as a technical team member at
              Seldon. I find myself continuing on my journey building software
              products to streamline machine learning deployment and monitoring
              processes in complex enterprise ecosystems. It is great to be part
              of an open core organisation working on the very cutting edge in
              terms of MLOps research & pushing this domain forward with close
              collaboration with some enterprise giants.
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
              Senior member of the tech team at Mu Sigma Research & Development
              team working on multiple projects for ML model operationalization,
              simulations environments and computer vision applications. This
              was a great experience that I found quite enjoyable not only
              growing as an organised engineer but improving my leadership
              skills as a senior software developer.
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
              I was promoted to the role of a Software Developer in the R&D team to
              create a new range of enterprise MLOps products that can be
              leveraged by the data scientists and business analysts. This
              involved toolkits for data pipelines, monitoring dashboards, AI
              deployments and user interfaces that assist with such machine
              learning workflows. It was an extremely energetic workplace where
              I took resposibility of new projects, improved my skills as a 
              engineer while starting to make valuble open source contributions.
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
              I joined the Open Research division of the Innovation and
              Development team at Mu Sigma Inc in Bangalore in 2015. MuSigma is
              the largest pure-play analytics company in the world and it was a
              exciting start to a full-time career in tech researching,
              analyzing, writing whitepapers on how new upcoming technologies
              can be adopted into the org ecosystem. Got my data science &
              analytics certification during this period as well.
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
              Collider site, CERN in Geneva. I was involved in the muon
              detection project, assembling GEM detectors and analysis of the
              lab setup. Also developed and installed a Raspberry Pi based
              weather monitoring system that streams the live environment data
              in the lab onto a dashboard as time-series data.
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
                I completed my Bachelors degree in Electronics and Communication
                Engineering from National Institute of Technology, Goa. I was
                also the captain of the college basketball team among other
                leadership roles.
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
