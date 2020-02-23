import React from "react";
import styles from "./timeline.module.css";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Star from "@material-ui/icons/Star";


class Timeline extends React.Component {
  render() {
    return (
      <div className={styles.mainBackground}>
        <VerticalTimeline>
          <VerticalTimelineElement
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<Star />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Developer, Seldon
            </h3>
            <h4 className="vertical-timeline-element-subtitle">2020-Present</h4>
            <p>
              I am currently working as a part of the Tech team at Seldon in
              London, United Kingdom. We are building an enterprise product to
              streamline and standardise the machine learning deployment process
              in the cloud.{" "}
              <a href="https://www.seldon.io/tech/products/deploy/">
                Seldon Deploy
              </a>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<Star />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Developer, Mu Sigma
            </h3>
            <h4 className="vertical-timeline-element-subtitle">2015-2019</h4>
            <p>
              I worked as a software developer in the research and development
              team at Mu Sigma Inc in Bangalore, India. This was an extremely
              energetic workplace where I build new projects, improved my
              skills, progressed as a senior developer and also started my very
              first open source contributions.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
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
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<Star />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelors in Technology
            </h3>
            <h4 className="vertical-timeline-element-subtitle">2011-2015</h4>
            <p>
              I graduated in Electronics and Communication Engineering from
              National Institute of Technology, Goa. This was my university
              experience learning about circuits, programming and computers.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<Star />}
          >
            <h3 className="vertical-timeline-element-title">World Wide Web</h3>
            <h4 className="vertical-timeline-element-subtitle">1989</h4>
            <p>
              The World Wide Web was invented by British scientist Tim
              Berners-Lee in 1989 while working at CERN. If not for the web,
              nobody would be reading this.{" "}
              <a href="https://home.cern/science/computing/birth-web">
                The birth of web
              </a>{" "}
              is one of the most important but under-rated event in the history
              of makind.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<Star />}
          />
        </VerticalTimeline></div>
    );
  }
}

export default Timeline;
