import React from "react";
import { Row, Col } from "react-bootstrap";
import WorkCard from "./WorkCard";
import capitalOne from "../assets/c1.jpeg";
import uofi from "../assets/uofi.png";
import stanford from "../assets/stanford.png";
import cisco from "../assets/cisco.png";
import abbvie from "../assets/abbvie.png";
import tcs from "../assets/tcs.png";
import metlife from "../assets/metlife.jpeg";
import tanium from "../assets/tanium.png";

function Work() {
  return (
    <div>
      <Row>
        <Col sm={12} md={6}>
          <WorkCard
            company={workInfo.TANIUM.company}
            jobTitle={workInfo.TANIUM.jobTitle}
            date={workInfo.TANIUM.date}
            description={workInfo.TANIUM.description}
            imgsrc={tanium}
          />
        </Col>
        <Col sm={12} md={6}>
          <WorkCard
            company={workInfo.METLIFE.company}
            jobTitle={workInfo.METLIFE.jobTitle}
            date={workInfo.METLIFE.date}
            description={workInfo.METLIFE.description}
            imgsrc={metlife}
          />
        </Col>
        <Col sm={12} md={6}>
          <WorkCard
            company={workInfo.SWECAPITALONE.company}
            jobTitle={workInfo.SWECAPITALONE.jobTitle}
            date={workInfo.SWECAPITALONE.date}
            description={workInfo.SWECAPITALONE.description}
            imgsrc={capitalOne}
          />
        </Col>
        <Col sm={12} md={6}>
          <WorkCard
            company={workInfo.UOFIPM.company}
            jobTitle={workInfo.UOFIPM.jobTitle}
            date={workInfo.UOFIPM.date}
            description={workInfo.UOFIPM.description}
            imgsrc={uofi}
          />
        </Col>
        <Col sm={12} md={6}>
          <WorkCard
            company={workInfo.ABBVIESDE.company}
            jobTitle={workInfo.ABBVIESDE.jobTitle}
            date={workInfo.ABBVIESDE.date}
            description={workInfo.ABBVIESDE.description}
            imgsrc={abbvie}
          />
        </Col>
        <Col sm={12} md={6}>
          <WorkCard
            company={workInfo.STANFORDPYTHON.company}
            jobTitle={workInfo.STANFORDPYTHON.jobTitle}
            date={workInfo.STANFORDPYTHON.date}
            description={workInfo.STANFORDPYTHON.description}
            imgsrc={stanford}
          />
        </Col>
        <Col sm={12} md={6}>
          <WorkCard
            company={workInfo.TCSCI.company}
            jobTitle={workInfo.TCSCI.jobTitle}
            date={workInfo.TCSCI.date}
            description={workInfo.TCSCI.description}
            imgsrc={tcs}
          />
        </Col>
        <Col sm={12} md={6}>
          <WorkCard
            company={workInfo.CISCOPM.company}
            jobTitle={workInfo.CISCOPM.jobTitle}
            date={workInfo.CISCOPM.date}
            description={workInfo.CISCOPM.description}
            imgsrc={cisco}
          />
        </Col>
      </Row>
    </div>
  );
}

const workInfo = {
  TANIUM: {
    company: "Tanium",
    jobTitle: "Software Engineer Intern",
    date: "June 2023 - August 2023",
    description: "We'll see!",
  },
  METLIFE: {
    company: "MetLife",
    jobTitle: "Software Engineer Intern",
    date: "May 2022 - September 2022",
    description:
      "Implemented APIs using SQL, Java, Spring Boot; these APIs would return information on the status of features, information on APIs pings over a certain time frame, and information about files processed in a certain time frame. Utilized React, HTML/CSS, and Javascript to dynamically display widgets, graphs, and tables from data pulled from pinging the created APIs.",
  },
  SWECAPITALONE: {
    company: "Capital One",
    jobTitle: "Software Engineer Intern",
    date: "January 2022 - April 2022",
    description:
      "Worked on a command line interface that conditioned and managed accounts in bulk for testing in sprints. Updated and bundled API requests to streamline into a single platform. Alongside, worked on testing these endpoints in a mobile app that is a GUI for the CLI project. Was responsible for the deletion of credit card accounts, the fetching of workflows and products, and grabbing the details of each workflow.",
  },
  UOFIPM: {
    company: "University of Illinois",
    jobTitle: "CS 196 Project Manager",
    date: "August 2021 - December 2021",
    description:
      "Created and designated tasks to 2 groups of 5 computer science students, through 6, 2-week long sprints. Provide student with technical help on frameworks such as Android Studio and React Native. The projects were both mobile applications; one would use a machine learning “bag-of-words” algorithm to determine whether or not users’ items were recyclable. the other project shows users where their nearest bike racks are, utilizing a bike rack tracking api.",
  },
  ABBVIESDE: {
    company: "Abbvie",
    jobTitle: "Salesforce Developer Intern",
    date: "May 2021 - December 2021",
    description:
      "Work on an existing contract lifecycle management system with a team of 3 full time developers, 2 managers, and 2 interns. Created a proof of concept that automated the creation of users on the platform when contacts were created. Created a proof of concept that automated the translation process for suppliers on the platform. Created a feature that would link users to pdfs of contracts they are currently owners of. Tested user stories and helped fix bugs features of a few user stories.",
  },
  STANFORDPYTHON: {
    company: "Stanford",
    jobTitle: "Python Section Lead",
    date: "April 2021 - May 2021",
    description:
      "Taught 10 students every week for an hour on the current week's material. Created and presented weekly presentations that summarized that week’s lectures. Went in depth about file and image manipulation, conditional statements, logic flow, and the various ways to debug. Graded students’ homework each week, and went through how to solve each week’s homework during the weekly session. Walked students through about 2 to 3 coding challenges each week.",
  },
  CISCOPM: {
    company: "Cisco",
    jobTitle: "Program Management Intern",
    date: "May 2020 - August 2020",
    description:
      "Managed 130 students across the United States and Canada. Was the main point of contact for 20 students in the program. Planned and managed 4 events for the students with around 7-10 peer interns. Led the project to create a yearbook for all students in the 9 different locations. Was the main point of contact with the 3rd party yearbook company when inquiring about the specifics of the project. Reported to a Systems Engineer, an Account Manager, and a Program Manager at Cisco.",
  },
  RDSWE: {
    company: "Founders - Illinois Entrepreneurs",
    jobTitle: "R&D Software Engineer",
    date: "February 2020 - Present",
    description:
      "Building out a local startup directory to connect students with local startups. Includes user login/authentication, and utilizes the React framework. Currently creating a job posting feature, which allows startups to post job postings and allows students to view these jobs.",
  },
  TCSCI: {
    company: "The Coding School",
    jobTitle: "Mobile Development & AP Computer Science Instructor",
    date: "February 2021 - June 2021",
    description:
      "Conduct 1 on 1 sessions with high school students on Java, the AP Computer Science curriculum, and a introduction to Android Studio. Topics include data structures, algorithms, recursions, the mvc pattern, and data management.",
  },
  TTC: {
    company: "Tech Together Chicago",
    jobTitle: "Web Developer",
    date: "May 2021 - February 2022",
    description:
      "Tech Together is the nation's largest initiative to address the gender inequities in the hackathon community, supporting over 10,000 hackers. Work closely with another developer to create a website to attract registrations for Chicago's first marginalized-group focused hackathon.",
  },
};

export default Work;
