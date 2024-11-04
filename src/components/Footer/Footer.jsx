import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import footerlogo from "../../../public/assets/adyatech-logo-for-website-white.png";
import callIcon from "../../../public/assets/call-icon.svg";
import addressIcon from "../../../public/assets/address-icon.svg";
import emailIcon from "../../../public/assets/email-icon.svg";

const Footer = () => {
  return (
    <>
    <footer
      className="text-light footer_mainSec"
      style={{ background: "#152F65" }}
    >
      <Container>
        <Row>
          {/* Company Logo */}
          <Col md={5} sm={5}>
            <div className="mb-3">
              <Image
                src={footerlogo}
                alt="Company Logo"
                className="footer-logo"
              />
            </div>
            <p className="footer_desc">
              At Adyah Tech, we provide innovative IT staffing, consulting, and
              data science solutions to empower your business in a rapidly
              evolving digital world.
            </p>
          </Col>

          {/* Services */}
          <Col md={2} sm={6}>
            <ListGroup variant="flush" className="footer_aitem_align">
              <h5>Services</h5>
              <ListGroup.Item className="footer_items">
                <Link to="/services/itStaffingConsulting">IT Staffing & Consulting</Link>
              </ListGroup.Item>
              <ListGroup.Item className="footer_items">
                <Link to="/services/dataScience">Data Science</Link>
              </ListGroup.Item>
              <ListGroup.Item className="footer_items">
                <Link to="/services/webDevelopment">Web Development</Link>
              </ListGroup.Item>
              <ListGroup.Item className="footer_items">
                <Link to="/services/mobileApplications">Mobile Applications</Link>
              </ListGroup.Item>
              <ListGroup.Item className="footer_items">
                <Link to="/services/cloudServices">Cloud Services</Link>
              </ListGroup.Item>
              <ListGroup.Item className="footer_items">
                <Link to="/services/salesforce">Salesforce</Link>
              </ListGroup.Item>
              <ListGroup.Item className="footer_items">
                <Link to="/services/healthCareIT">Health Care IT</Link>
              </ListGroup.Item>
              <ListGroup.Item className="footer_items">
                <Link to="/services/cyberSecurity">Cyber Security</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Quick Links */}
          <Col md={2} sm={6}>
            <ListGroup variant="flush" className="footer_aitem_align">
              <h5>Quick Links</h5>
              <ListGroup.Item className="footer_items">
                <Link to="/" >Home</Link>
              </ListGroup.Item>
              <ListGroup.Item className="footer_items">
                <Link to="/about">About Us</Link>
              </ListGroup.Item>
              <ListGroup.Item className="footer_items">
                <Link to="/clients">Clients</Link>
              </ListGroup.Item>
              <ListGroup.Item className="footer_items">
                <Link to="/careers">Careers</Link>
              </ListGroup.Item>
              <ListGroup.Item className="footer_items">
                <Link>Blog</Link>
              </ListGroup.Item>
              <ListGroup.Item className="footer_items">
                <Link to="/contact">Contact Us</Link>
              </ListGroup.Item>
              <ListGroup.Item className="footer_items">
                <Link to="/privacy-policy">Privacy Policy</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Social Links */}
          <Col md={3} sm={6}>
            <h5 className="socila_linktit">Contact</h5>

            {/* Contact Details with Icons */}
            <ul className="list-unstyled">
              <li>
                <img src={addressIcon} alt="" /> Address: 123 Street, City, Country
              </li>
              <li>
                <img src={callIcon} alt="" /> Phone:{" "}
                <a href="tel:+123456789" className="text-light">
                  +123 456 789
                </a>
              </li>
              <li>
                <img src={emailIcon} alt="" /> Email:{" "}
                <a href="mailto:info@company.com" className="text-light">
                  info@company.com
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Horizontal line above rights content */}
        <hr className="my-4 text-light" />

        {/* Rights Content */}
        <Row className="pt-3">
          <Col className="footer-copy-sec">
            <p>Copyright &copy; 2024 Adyahtech. All Rights Reserved</p>

            <ListGroup horizontal>
              <ListGroup.Item className="footer_icons">
                <a className="text-light">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="footer_icons">
                <a className="text-light">
                  <i className="fab fa-twitter"></i>
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="footer_icons">
                <a className="text-light">
                  <i className="fab fa-instagram"></i>
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="footer_icons">
                <a className="text-light">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </footer>

    <div className="footer-gradient"></div>
    </>
  );
};

export default Footer;
