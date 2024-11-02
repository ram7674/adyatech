import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import logoImage from "/assets/adyatech-logo-for-website.png";

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar_mainContainer">
      <Container fluid className="nav_CardContainer">
        <Navbar.Brand>
          <NavLink to="/">
            <img src={logoImage} alt="Adyatech Logo" className="logo" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="navbar_items">
            <Nav.Link as={NavLink} to="/" exact="true">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About Us
            </Nav.Link>
            <NavDropdown title="Services" className="services-dropdown">
              <NavDropdown.Item
                as={NavLink}
                to="/services/itStaffingConsulting"
              >
                IT Staffing & Consulting
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/dataScience">
                Data Science
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/webDevelopment">
                Web Development
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/mobileApplications">
                Mobile Applications
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/cloudServices">
                Cloud Services
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/salesforce">
                Salesforce
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/healthCareIT">
                Health Care IT
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/cyberSecurity">
                Cyber Security
              </NavDropdown.Item>
            </NavDropdown>

            {/* <NavDropdown title="Services"  className="services-dropdown">
              <NavDropdown.Item as={NavLink} to="/services/it-staffing-consulting" >IT Staffing & Consulting</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/data-science">Data Science</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/web-development">Web Development</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/mobile-applications">Mobile Applications</NavDropdown.Item>

              <NavDropdown.Item as={NavLink} to="/services/cloud-services" >Cloud Services</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/salesforce">Salesforce</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/health-care-it">Health Care IT</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/cyber-security">Cyber Security</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link as={NavLink} to="/clients">
              Clients
            </Nav.Link>
            <Nav.Link as={NavLink} to="/careers">
              Careers
            </Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link as={NavLink} to="/contact" className="navbar-contBtn">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
