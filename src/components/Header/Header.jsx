import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import logoImage from "/assets/adyatech-logo-for-website.png";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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

  return (
    <Navbar expand="lg" className="navbar_mainContainer sticky-top">
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
            <NavDropdown
              title={<span onClick={handleTitleClick}>Services</span>}
              className="services-dropdown"
              show={isDropdownOpen} // Control dropdown visibility
              onMouseEnter={handleMouseEnter} // Show on hover for desktop
              onMouseLeave={handleMouseLeave} // Hide on leave for desktop
              onToggle={toggleDropdown} // Toggle on click for mobile
            >
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
            <Nav.Link as={NavLink} to="/clients">
              Clients
            </Nav.Link>
            <Nav.Link as={NavLink} to="/careers">
              Careers
            </Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link
              as={NavLink}
              to="/contact"
              className="navbar-contBtn"
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
