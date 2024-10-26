import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
} from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import logoImage from "../../../public/assets/adyatech-logo-for-website.png"

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar_mainContainer">
      <Container fluid className="nav_CardContainer">
        <Navbar.Brand>
          <img src={logoImage} alt="" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="navbar_items">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/services/it-staffing-consulting" >IT Staffing & Consulting</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/data-science">Data Science</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/web-development">Web Development</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/mobile-applications">Mobile Applications</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/clients">Clients</Nav.Link>
            <Nav.Link as={NavLink} to="/careers">Careers</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>
          </Nav>

          {/* <Nav>
          <Nav.Link href="#">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown-2">
            <NavDropdown.Item href="#">Action</NavDropdown.Item>
            <NavDropdown.Item href="#">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
