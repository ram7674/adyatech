import React from "react";
import { Container, Row, Col, ListGroup, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import footerlogo from "../../../public/assets/adyatech-logo-for-website-white.png";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="text-light footer_mainSec"
      style={{ background: "#233f77" }}
    >
      <Container>
        <Row>
          {/* Company Logo */}
          <Col md={6} sm={6}>
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

            {/* Contact Details with Icons */}
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-map-marker-alt"></i> Address: 123 Street,
                City, Country
              </li>
              <li>
                <i className="fas fa-phone-alt"></i> Phone:{" "}
                <a href="tel:+123456789" className="text-light">
                  +123 456 789
                </a>
              </li>
              <li>
                <i className="fas fa-envelope"></i> Email:{" "}
                <a href="mailto:info@company.com" className="text-light">
                  info@company.com
                </a>
              </li>
            </ul>
          </Col>

          {/* Quick Links */}
          <Col md={2} sm={6}>
            <ListGroup variant="flush" className="footer_aitem_align">
              <h5>Quick Links</h5>
              <ListGroup.Item className="footer_items">
                <Link>Home</Link>
              </ListGroup.Item>
              <ListGroup.Item className="footer_items">
                <Link>About Us</Link>
              </ListGroup.Item>
              <ListGroup.Item className="footer_items">
                <Link>Clients</Link>
              </ListGroup.Item>
              <ListGroup.Item className="footer_items">
                <Link>Careers</Link>
              </ListGroup.Item>
              <ListGroup.Item className="footer_items">
                <Link>Contact Us</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Services */}
          <Col md={2} sm={6}>
            <ListGroup variant="flush" className="footer_aitem_align">
              <h5>Services</h5>
              <ListGroup.Item className="footer_items">
                <Link>IT Staffing & Consulting</Link>
              </ListGroup.Item>
              <ListGroup.Item className="footer_items">
                <Link>Data Science</Link>
              </ListGroup.Item>
              <ListGroup.Item className="footer_items">
                <Link>Web Development</Link>
              </ListGroup.Item>
              <ListGroup.Item className="footer_items">
                <Link>Mobile Applications</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Social Links */}
          <Col md={2} sm={6}>
            <h5 className="socila_linktit">Follow Us</h5>
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

        {/* Horizontal line above rights content */}
        <hr className="my-4 text-light" />

        {/* Rights Content */}
        <Row className="pt-3">
          <Col className="text-center">
            <p>&copy; 2024 adyahtech.com All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
