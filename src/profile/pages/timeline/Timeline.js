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
            contentArrowStyle={{ transform: "scale(2)", borderRight: "10px solid  rgb(16, 204, 82)" }}
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<Star />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Developer, Seldon
            </h3>
            <h4 className="vertical-timeline-element-subtitle">2020-Present</h4>
            <p>
              Currently working as a part of the tech team at Seldon in London,
              United Kingdom. I find myself continuing on my journey building
              products to streamline machine learning deployment processes in
              the complex enterprise ecosystems. At the same time, it is great to be part of an open core organisation.
              <a href="https://www.seldon.io/tech/products/deploy/">
                {" Seldon Deploy"}
              </a>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentArrowStyle={{ transform: "scale(2) rotateY(180deg)", borderRight: "10px solid  rgb(33, 150, 243)" }}
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
            contentArrowStyle={{ transform: "scale(2)", borderRight: "10px solid  rgb(33, 150, 243)" }}
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
            contentArrowStyle={{ transform: "scale(2) rotateY(180deg)", borderRight: "10px solid  rgb(33, 150, 243)" }}
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
            contentArrowStyle={{ transform: "scale(2)", borderRight: "10px solid  rgb(233, 30, 99)" }}
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
            contentArrowStyle={{ transform: "scale(2) rotateY(180deg)", borderRight: "10px solid  rgb(252, 182, 3)" }}
            iconStyle={{ background: "rgb(252, 182, 3)", color: "#fff" }}
            icon={<Star />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelors in Technology, NIT Goa
            </h3>
            <h4 className="vertical-timeline-element-subtitle">2011-2015</h4>
            <p>
              I graduated in Electronics and Communication Engineering from
              National Institute of Technology, Goa. This was my university
              experience learning about circuits, programming and computers.
            </p>
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

export default Timeline;
