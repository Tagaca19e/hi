import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "./Timeline.css";

const Timeline = () => {
  return (
    <VerticalTimeline className="timeline">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2010 - 2011"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h2 className="vertical-timeline-element-title">Art Director</h2>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        // className="vertical-timeline-element--work"
        date="2010 - 2011"
        // iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h2 className="vertical-timeline-element-title">Art Director</h2>
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>
          Creative Direction, User Experience, Visual Design, SEO, Online
          Marketing
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2008 - 2010"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h2 className="vertical-timeline-element-title">Web Designer</h2>
        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
        <p>User Experience, Visual Design</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2006 - 2008"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h2 className="vertical-timeline-element-title">Web Designer</h2>
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>User Experience, Visual Design</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="April 2013"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        // icon={<SchoolIcon />}
      >
        <h2 className="vertical-timeline-element-title">
          Content Marketing for Web, Mobile and Social Media
        </h2>
        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
        <p>Strategy, Social Media</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};
export default Timeline;
