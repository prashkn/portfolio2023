import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import Work from "./components/Work";
import pic from "./assets/prashant.JPG";
import { Row, Col } from "react-bootstrap";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <div className="info">
        <div id="home" className="header">
          <Row>
            <Col>
              <img src={pic} alt="profilepic" />
            </Col>
            <Col xs={9}>
              <h2>Prashant Naganaboyina</h2>
              <h4>
                Junior in Computer Science @ UIUC. Track in Intelligence & Big
                Data.
              </h4>
              <h4>
                Software Engineering Intern @
                <span className="highlight">
                  <a
                    href="https://www.cbinsights.com/research/cybersecurity-unicorns/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {"   "}Tanium{"   "}
                  </a>
                </span>
                .
              </h4>
            </Col>
          </Row>
        </div>
        <div id="work" className="work">
          <h1>Work</h1>
          <Work />
        </div>
        <div id="projects" className="projects">
          <h1>Projects</h1>
          <Projects />
        </div>
        <div id="background" className="background">
          <h1>Background</h1>
          <Row>
            <Col>
              <h5 style={{ fontSize: 18 }}>
                Hello! I'm Prashant, a junior studying Computer Science at the
                University of Illinois. I'm from{" "}
                <span className="highlight">North Carolina</span>, and currently
                live in Northern Virginia when I'm not in Illinois for school.
              </h5>
              <h5 style={{ fontSize: 18 }}>
                My interests throughout college has changed drastically, but
                currently{" "}
                <span className="highlight">
                  I'm interested in Computational Photography/Computer Vision,
                  Computational Advertising Infrastructure, and Game Development
                </span>
                . I'm a Software Engineer intern at Tanium, a cybersecurity
                unicorn, and have worked at MetLife, Capital One, Cisco, and
                Abbvie in the past.
              </h5>
            </Col>
            <Col>
              <h5 style={{ fontSize: 18 }}>
                Outside of school, I have a{" "}
                <span className="highlight">cat named Bagheera</span>, who my
                family and I adopted back in December 2021. I'm super into{" "}
                <span className="highlight">League of Legends and chess</span>,
                although I am extremely terrible at both. I also{" "}
                <span className="highlight">love food and brewing coffee</span>,
                and I'm starting to get into cooking as well.
              </h5>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default App;
