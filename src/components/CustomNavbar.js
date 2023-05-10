import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../components/CustomNavbar.css";

function CustomNavbar() {
  return (
    <Navbar key={"xl"} bg="light" expand={"xl"} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#">Prashant Naganaboyina</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"xl"}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${"xl"}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${"xl"}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"xl"}`}>
              Prashant Naganaboyina
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 fill">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link
                href="https://drive.google.com/file/d/1HzXpPvmV6adVVx94nphYoeY-YF8MNQYu/view?usp=sharing"
                target="_blank"
              >
                Resume
              </Nav.Link>
              <Nav.Link href="#work">Work</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#background">Background</Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/in/prashant-n/"
                target="_blank"
              >
                Contact
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
