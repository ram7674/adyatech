import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import logoImage from "/assets/adyatech-logo-for-website.png";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [expanded, setExpanded] = useState(false); // New state for collapse control
  const navigate = useNavigate();

  // Handle hover
  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  // Handle click on title for desktop
  const handleTitleClick = (e) => {
    e.preventDefault();
    navigate("/services");
  };

  // Toggle dropdown on mobile
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  // Handle navbar toggle
  const handleToggle = () => setExpanded((prev) => !prev);

  // Handle link click and close collapse
  const closeNavbar = () => setExpanded(false);

  return (
    <Navbar expand="lg" className="navbar_mainContainer sticky-top" expanded={expanded}>
      <Container fluid className="nav_CardContainer">
        <Navbar.Brand>
          <NavLink to="/">
            <img src={logoImage} alt="Adyatech Logo" className="logo" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="navbar_items">
            <Nav.Link as={NavLink} to="/" exact="true" onClick={closeNavbar}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" onClick={closeNavbar}>
              About Us
            </Nav.Link>
            <NavDropdown
              title={<span onClick={handleTitleClick}>Services</span>}
              className="services-dropdown"
              show={isDropdownOpen} // Control dropdown visibility
              onMouseEnter={handleMouseEnter} // Show on hover for desktop
              onMouseLeave={handleMouseLeave} // Hide on leave for desktop
              onToggle={toggleDropdown} // Toggle on click for mobile
            >
              <NavDropdown.Item as={NavLink} to="/services/itStaffingConsulting" onClick={closeNavbar}>
                IT Staffing & Consulting
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/dataScience" onClick={closeNavbar}>
                Data Science
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/webDevelopment" onClick={closeNavbar}>
                Web Development
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/mobileApplications" onClick={closeNavbar}>
                Mobile Applications
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/cloudServices" onClick={closeNavbar}>
                Cloud Services
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/salesforce" onClick={closeNavbar}>
                Salesforce
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/healthCareIT" onClick={closeNavbar}>
                Health Care IT
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/cyberSecurity" onClick={closeNavbar}>
                Cyber Security
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/clients" onClick={closeNavbar}>
              Clients
            </Nav.Link>
            <Nav.Link as={NavLink} to="/careers" onClick={closeNavbar}>
              Careers
            </Nav.Link>
            <Nav.Link onClick={closeNavbar}>
              Blog
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link as={NavLink} to="/contact" className="navbar-contBtn" onClick={closeNavbar}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
