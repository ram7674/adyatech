import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import footerlogo from "/assets/adyatech-logo-for-website-white.png";
import callIcon from "/assets/call-icon.svg";
import addressIcon from "/assets/address-icon.svg";
import emailIcon from "/assets/email-icon.svg";

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
            <Col sm={5} md={7} lg={5}>
              <div className="mb-3">
                <Image
                  src={footerlogo}
                  alt="Company Logo"
                  className="footer-logo"
                />
              </div>
              <p className="footer_desc">
                At Adyah Tech, we provide innovative IT staffing, consulting,
                and data science solutions to empower your business in a rapidly
                evolving digital world.
              </p>
            </Col>

            {/* Services */}
            <Col sm={6} md={5} lg={2}>
              <ListGroup variant="flush" className="footer_aitem_align">
                <h5>Services</h5>
                <ListGroup.Item className="footer_items">
                  <Link to="/services/itStaffingConsulting">
                    IT Staffing & Consulting
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="footer_items">
                  <Link to="/services/dataScience">Data Science</Link>
                </ListGroup.Item>
                <ListGroup.Item className="footer_items">
                  <Link to="/services/webDevelopment">Web Development</Link>
                </ListGroup.Item>
                <ListGroup.Item className="footer_items">
                  <Link to="/services/mobileApplications">
                    Mobile Applications
                  </Link>
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
            <Col sm={6} md={7} lg={2}>
              <ListGroup variant="flush" className="footer_aitem_align quick-lin">
                <h5>Quick Links</h5>
                <ListGroup.Item className="footer_items">
                  <Link to="/">Home</Link>
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
            <Col sm={6} md={5} lg={3}>
              <h5 className="socila_linktit">Contact</h5>

              {/* Contact Details with Icons */}
              <ul className="list-unstyled">
              <li>
                  <img src={callIcon} alt="" />
                  <a href="tel:+123456789" className="text-light">
                    <span className="footer-addWid">+1 (470) - 508 - 5128</span>
                  </a>
                </li>
                <li>
                  <img src={emailIcon} alt="" />
                  <a href="mailto:info@adyahtech.com" className="text-light">
                    <span className="footer-addWid">info@adyahtech.com</span>
                  </a>
                </li>
                <li>
                  <img src={addressIcon} alt="" />
                  <span className="footer-addWid">
                    4555 Mansell Rd # 300 Alpharetta, GA 30022, USA
                  </span>
                </li>
              
              </ul>
            </Col>
          </Row>

          {/* Horizontal line above rights content */}
          <hr className="my-4 text-light" />

          {/* Rights Content */}
          <Row className="pt-3">
            <Col className="footer-copy-sec">
              <p>Copyright &copy; 2024 <span style={{fontWeight: "600"}}>Adyahtech,</span> All Rights Reserved. Developed by<span style={{fontWeight: "600"}}> SR Brand Builders</span></p>

              <ListGroup horizontal className="footer-or-card">
                <a href="https://www.facebook.com/profile.php?id=61566987835328" target="_blank">
                  <div className="footer_icons">
                  <i className="fab fa-facebook-f"></i>
                  </div>
                </a>
                <a href="https://www.instagram.com/adyahtech/" target="_blank">
                  <div className="footer_icons">
                  <i className="fab fa-instagram"></i>
                  </div>
                </a>
                <a href="https://www.linkedin.com/company/105226426/admin/dashboard/" target="_blank">
                  <div className="footer_icons">
                    <i className="fab fa-linkedin-in"></i>
                  </div>
                </a>
                <a href="https://wa.me/+1 (470) - 508 - 5128" target="_blank">
                  <div className="footer_icons">
                  <i className="fab fa-whatsapp"></i>
                  </div>
                </a>
                <a href="#">
                  <div className="footer_icons">
                  <i className="fab fa-youtube"></i>
                  </div>
                </a>
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
