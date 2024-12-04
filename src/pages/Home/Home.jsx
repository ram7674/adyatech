import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { Helmet } from "react-helmet";

import ContactCard from "../../components/ContactCard/ContactCard";
import OurCulture from "../../components/OurCulture/OurCulture";

/* images importing */
import homePageImg from "/assets/home-pageimg.svg";
import whatWeDoImage from "/assets/what-we-do-Image.svg";
import ConsultaionImg from "/assets/how-it-conusultant-img.svg";
import DiscussionImg from "/assets/how-it-discussion-img.svg";
import ExecutionImg from "/assets/how-it-execution-img.png";
import ArrowImg from "/assets/how-it-arrow-img.svg";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

/* icons importing */
import iconItStaff from "/assets/icon-it-staff-consulting.svg";
import iconDataScience from "/assets/icon-data-science.svg";
import iconWebDevelopment from "/assets/icon-web-development.svg";
import iconMobileApp from "/assets/icon-mobile-application.svg";
import iconCloudServices from "/assets/icon-cloud-services.svg";
import iconSalesForce from "/assets/icon-sales-force.svg";
import iconHealthCare from "/assets/icon-health-care.svg";
import iconCyberSecurity from "/assets/icon-cyber-security.svg";

const Home = () => {
  return (
    <>
      {/* helmet */}
      <Helmet>
        <title>Welcome to AdyahTech | Innovative IT Solutions</title>
        <meta
          name="description"
          content="Empowering your business with cutting-edge IT staffing, data science, and consulting services. Discover tailored IT solutions to drive efficiency, growth, and success."
        />
        <meta
          name="keywords"
          content="IT staffing, consulting services, data science, web development, mobile applications, cloud services, Salesforce, cybersecurity, healthcare IT"
        />
        <meta name="author" content="AdyahTech" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        {/* Open Graph Meta Tags */}
        {/* <meta
          property="og:title"
          content="Welcome to Adyah Tech | Innovative IT Solutions"
        />
        <meta
          property="og:description"
          content="Adyah Tech provides IT staffing, consulting, data science, and other IT services to empower businesses in a rapidly evolving digital world."
        />
        <meta
          property="og:image"
          content="https://adyahtech.com/og-image.jpg"
        /> */}
        {/* Replace with actual image URL */}

        {/* <meta property="og:url" content="https://adyahtech.com/" />
        <meta property="og:type" content="website" /> */}

        {/* Twitter Card Meta Tags */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Welcome to Adyah Tech | Innovative IT Solutions"
        />
        <meta
          name="twitter:description"
          content="Empowering your business with cutting-edge IT solutions including IT staffing, data science, web development, and more."
        />
        <meta
          name="twitter:image"
          content="https://adyahtech.com/twitter-image.jpg"
        /> */}
        {/* Replace with actual image URL */}
        {/* Canonical Link */}
        {/* <link rel="canonical" href="https://adyahtech.com/" /> */}
      </Helmet>

      {/* home page */}
      <div className="container-fluid hero_section">
        <div className="container">
          <div className="row">
            {/*  */}
            <div
              className="col-md-12 col-lg-6 hero_content_card"
              data-aos="fade-up"
            >
              <span>WELCOME TO ADYAH TECH</span>
              <h1>Innovative IT Solutions for Your Business Success</h1>
              <p>
                Empowering your business with cutting-edge IT staffing, data
                science, and consulting services
              </p>
              <Link to="/contact">
                <button>Contact Now</button>
              </Link>
            </div>
            {/*  */}
            <div
              className="col-md-12 col-lg-6 hero_gif_card"
              data-aos="zoom-in"
            >
              <img src={homePageImg} alt="IT Consulting GIF" />
            </div>
          </div>
        </div>
      </div>

      {/* our culture contaier */}
      <OurCulture />

      {/* what-we-do section */}
      <div className="container-fluid why-we-secBg">
        <div className="container">
          <div className="row">
            {/* left card */}
            <div className="col-lg-6">
              <div className="why-secParent" data-aos="fade-up">
                <span>WHAT WE DO</span>
                {/* only sm-visible */}

                <h4>Elevate Your Digital Impact with Customized Solutions</h4>
                <p>
                  At Adyah Tech, we provide innovative IT staffing, consulting,
                  and data science solutions to empower your business in a
                  rapidly evolving digital world. Our team of experts delivers
                  results that drive efficiency, growth, and success.
                </p>
                <div className="col-lg-6">
                  <div
                    className="why-choose-left hide_lg_dev"
                    data-aos="zoom-in"
                  >
                    <img
                      src={whatWeDoImage}
                      alt="experience"
                      className="why-choose-img"
                    />
                  </div>
                </div>
                <div className="why-secChild">
                  <h5>Innovative Strategies</h5>
                  <h5>Industry Expertise</h5>
                  <h5>Client - Centered Service</h5>
                  <h5>Clear & Flexible Pricing</h5>
                  <h5>Innovative Solutions</h5>
                  <h5>Enhanced User Experience</h5>
                </div>
              </div>
            </div>

            {/* right card */}
            <div className="col-lg-6">
              <div className="why-choose-left hide_sm_dev" data-aos="zoom-in">
                <img
                  src={whatWeDoImage}
                  alt="experience"
                  className="why-choose-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* what we offer */}
      <div className="offer-mainContainer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="offer-container">
                {/* tittle section */}
                <div className="offer-titleCard">
                  <span>WHAT WE OFFER</span>
                  <h4>
                    Delivering IT solutions that enable you to work smarter
                  </h4>
                </div>

                {/* inner main card */}
                <div className="offers-dataCard">
                  {/* card1 */}
                  <div className="offers-card" data-aos="fade-up">
                    <div className="offer-icon-card">
                      <div className="offer-icon">
                        <img
                          src={iconItStaff}
                          alt="icon IT Staffing & Consulting"
                        />
                      </div>
                      <h4>IT Staffing & Consulting</h4>
                    </div>

                    <div className="inner-card-data">
                      <p>
                        We provide flexible, high-quality staffing solutions
                        that align with your unique IT needs, connecting you
                        with specialized professionals for both short- and
                        long-term projects.
                      </p>
                      <Link to="/services/itStaffingConsulting">
                        <button>Learn more</button>
                      </Link>
                    </div>
                    <div className="offer-gradient"></div>
                  </div>
                  {/* card2 */}
                  <div className="offers-card" data-aos="fade-up">
                    <div className="offer-icon-card">
                      <div className="offer-icon">
                        <img
                          src={iconDataScience}
                          alt="icon IT Staffing & Consulting"
                        />
                      </div>
                      <h4>Data Science</h4>
                    </div>

                    <div className="inner-card-data">
                      <p>
                        Harness the power of data to make strategic, data-driven
                        decisions with analytics, AI, and predictive modeling,
                        enabling insights that drive growth and competitive
                        advantage.
                      </p>
                      <Link to="/services/dataScience">
                        <button>Learn more</button>
                      </Link>
                    </div>
                    <div className="offer-gradient"></div>
                  </div>
                  {/* card3 */}
                  <div className="offers-card" data-aos="fade-up">
                    <div className="offer-icon-card">
                      <div className="offer-icon">
                        <img
                          src={iconWebDevelopment}
                          alt="icon Web Development"
                        />
                      </div>
                      <h4>Web Development</h4>
                    </div>

                    <div className="inner-card-data">
                      <p>
                        Build robust, user-centered websites tailored to meet
                        your business goals with responsive designs, optimized
                        performance, enhanced accessibility, and advanced SEO
                        integration.
                      </p>
                      <Link to="/services/webDevelopment">
                        <button>Learn more</button>
                      </Link>
                    </div>
                    <div className="offer-gradient"></div>
                  </div>
                  {/* card4 */}
                  <div className="offers-card" data-aos="fade-up">
                    <div className="offer-icon-card">
                      <div className="offer-icon">
                        <img
                          src={iconMobileApp}
                          alt="icon Mobile Applications"
                        />
                      </div>
                      <h4>Mobile Applications</h4>
                    </div>

                    <div className="inner-card-data">
                      <p>
                        Deliver a seamless experience to your users with custom
                        mobile applications designed for iOS and Android,
                        ensuring engagement, functionality, and intuitive
                        navigation.
                      </p>
                      <Link to="/services/mobileApplications">
                        <button>Learn more</button>
                      </Link>
                    </div>
                    <div className="offer-gradient"></div>
                  </div>
                  {/* card5 */}
                  <div className="offers-card" data-aos="fade-up">
                    <div className="offer-icon-card">
                      <div className="offer-icon">
                        <img
                          src={iconCloudServices}
                          alt="icon Cloud Services"
                        />
                      </div>
                      <h4>Cloud Services</h4>
                    </div>

                    <div className="inner-card-data">
                      <p>
                        Optimize operations with scalable cloud solutions that
                        offer flexibility, security, cost savings, enhanced
                        performance, and increased reliability.
                      </p>
                      <Link to="/services/cloudServices">
                        <button>Learn more</button>
                      </Link>
                    </div>
                    <div className="offer-gradient"></div>
                  </div>
                  {/* card6 */}
                  <div className="offers-card" data-aos="fade-up">
                    <div className="offer-icon-card">
                      <div className="offer-icon">
                        <img src={iconSalesForce} alt="icon Sales force" />
                      </div>
                      <h4>Salesforce</h4>
                    </div>

                    <div className="inner-card-data">
                      <p>
                        Maximize customer relationship management with
                        customized Salesforce solutions that integrate smoothly
                        with your business processes.
                      </p>
                      <Link to="/services/salesforce">
                        <button>Learn more</button>
                      </Link>
                    </div>
                    <div className="offer-gradient"></div>
                  </div>
                  {/* card7 */}
                  <div className="offers-card" data-aos="fade-up">
                    <div className="offer-icon-card">
                      <div className="offer-icon">
                        <img src={iconHealthCare} alt="iconHealth Care" />
                      </div>
                      <h4>Health Care IT</h4>
                    </div>

                    <div className="inner-card-data">
                      <p>
                        Empower healthcare providers with secure, compliant IT
                        solutions that enhance patient care, streamline
                        operations, and improve overall efficiency.
                      </p>
                      <Link to="/services/healthCareIT">
                        <button>Learn more</button>
                      </Link>
                    </div>
                    <div className="offer-gradient"></div>
                  </div>
                  {/* card8 */}
                  <div className="offers-card" data-aos="fade-up">
                    <div className="offer-icon-card">
                      <div className="offer-icon">
                        <img
                          src={iconCyberSecurity}
                          alt="icon Cyber Security"
                        />
                      </div>
                      <h4>Cyber Security</h4>
                    </div>

                    <div className="inner-card-data">
                      <p>
                        Safeguard your digital assets with proactive
                        cybersecurity measures that mitigate risks, enhance
                        security, and protect against evolving threats, ensuring
                        protection.
                      </p>
                      <Link to="/services/cyberSecurity">
                        <button>Learn more</button>
                      </Link>
                    </div>
                    <div className="offer-gradient"></div>
                  </div>
                  {/* card9 */}
                  <div className="click-here-sec" data-aos="fade-up">
                    <div className="click-circle-card">
                      <Link to="/services">
                        <button>Clic Here For More Info</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* how it works */}
      <div className="container-fluid how-it-work-MainBg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="how-it-tit-card">
                <span>HOW IT WORKS</span>
                <h3>Your Path to Success How We Deliver Results</h3>
              </div>
              <div className="how-it-card">
                <div className="how-it-image-Sec" data-aos="zoom-in">
                  <img src={ConsultaionImg} alt="Consultation" />
                  <h4>Consultation</h4>
                </div>
                <img
                  src={ArrowImg}
                  alt="arrow image"
                  className="how-it-sm-rotate"
                  data-aos="flip-left"
                />
                <div className="how-it-image-Sec" data-aos="zoom-in">
                  <img src={DiscussionImg} alt="Discussion & Planning" />
                  <h4>Discussion & Planning</h4>
                </div>
                <img
                  src={ArrowImg}
                  alt="arrow image"
                  className="how-it-sm-rotate"
                  data-aos="flip-left"
                />
                <div className="how-it-image-Sec" data-aos="zoom-in">
                  <img src={ExecutionImg} alt="Execution" />
                  <h4>Execution</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* why choose us */}
      <WhyChooseUs />

      {/* home page contact card */}
      <ContactCard />
    </>
  );
};

export default Home;
