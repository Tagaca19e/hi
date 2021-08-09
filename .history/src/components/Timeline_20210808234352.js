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
        <h4 className="vertical-timeline-element-title">
          Video Specialist - Cal State University, Bakersfield
        </h4>
        <h4 className="vertical-timeline-element-subtitle">
          Nov 2020 - Current
        </h4>
        <p>
          Managed to help out students with their frequently asked problems by
          making infographic videos, these included how to pay for tuition fees
          and how to navigate the school
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        // className="vertical-timeline-element--work"
        date="2010 - 2011"
        // iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h4 className="vertical-timeline-element-title">
          Software Developer Program - IBM
        </h4>
        <h4 className="vertical-timeline-element-subtitle">
          Jun 2021 - July 2021
        </h4>
        <p>
          Built Full stack applications using React.js, Express.js, and the MVC
          architecture.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2008 - 2010"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h4 className="vertical-timeline-element-title">
          Microsoft Learn Student Ambassador - Microsoft
        </h4>
        <h4 className="vertical-timeline-element-subtitle">
          Jan 2021 - Current
        </h4>
        <p>
          Organized a workshop for building a MERN stack application that
          enabled students to learn frontend and backend development with
          React.Js, Express.Js, MongoDB, and Node.Js.
        </p>
      </VerticalTimelineElement>
      {/* <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2006 - 2008"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h4 className="vertical-timeline-element-title">Web Designer</h4>
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>User Experience, Visual Design</p>
      </VerticalTimelineElement> */}
      {/* <VerticalTimelineElement
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
      </VerticalTimelineElement> */}
    </VerticalTimeline>
  );
};
export default Timeline;
