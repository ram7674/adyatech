import React from "react";
import "./service.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ContactCard from "../../components/ContactCard/ContactCard";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

import itStaffImage from "/assets/it-staffing-consulting.svg";
import dataScienceImage from "/assets/data-science.svg";
import webDevImage from "/assets/web-development.svg";
import mobileAppImage from "/assets/mobile-application.svg";
import cloudServiceImage from "/assets/cloud-services.svg";
import salesForceImage from "/assets/sales-force.svg";
import  healthCareItImage from "/assets/health-care-it.svg";
import cyberSecurImage from "/assets/cyber-security.svg";

const Service = () => {
  return (
    <>
      {/* navbar */}
      <Header />

      <div className="container-fluid contact-mainBg">
        <span>OUR SERVICES</span>
        <h1>Empowering Digital Transformation</h1>
        <h4>Driving Success with Tailored Technology Solutions</h4>
        <p>
          At Adyah Tech, we provide comprehensive IT solutions that empower
          businesses to excel in an ever-evolving digital landscape. Our
          expertise spans IT staffing, data science, web development, and mobile
          applications—delivering scalable, customized solutions that foster
          growth and innovation.
        </p>
      </div>

      <div className="container-fluid ser-main-bgContainer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="service-secTitCard">
                <span>WHAT WE OFFER</span>
                <h3>Delivering IT solutions that enable you to work smarter</h3>
              </div>
              <div className="services-all-itemsContainer">
                {/* card1 */}
                <div className="services-itemsCard"  data-aos="fade-up">
                  <img src={itStaffImage} alt="it-Staff consulting image" />
                  <div className="services-descCard">
                    <h4>IT Staffing & Consulting</h4>
                    <p>
                      We provide flexible, high-quality staffing solutions that
                      align with your unique IT needs, connecting you with
                      specialized professionals for both short- and long-term
                      projects.
                    </p>
                    <Link to="/services/itStaffingConsulting"><button>Learn more</button></Link>
                  </div>
                </div>
                {/* card2 */}
                <div className="services-itemsCard"  data-aos="fade-up">
                  <img src={dataScienceImage} alt="Data Science image" />
                  <div className="services-descCard">
                    <h4>Data Science</h4>
                    <p>
                      Harness the power of data to make strategic, data-driven
                      decisions with analytics, AI, and predictive modeling,
                      enabling insights that drive growth and competitive
                      advantage.
                    </p>
                    <Link to="/services/dataScience"><button>Learn more</button></Link>
                  </div>
                </div>
                {/* card3 */}
                <div className="services-itemsCard"  data-aos="fade-up">
                  <img src={webDevImage} alt="web development image" />
                  <div className="services-descCard">
                    <h4>Web Development</h4>
                    <p>
                      Build robust, user-centered websites tailored to meet your
                      business goals with responsive designs, optimized
                      performance, enhanced accessibility, and advanced SEO
                      integration.
                    </p>
                    <Link to="/services/webDevelopment"><button>Learn more</button></Link>
                  </div>
                </div>
                {/* card4 */}
                <div className="services-itemsCard"  data-aos="fade-up">
                  <img src={mobileAppImage} alt="mobile application" />
                  <div className="services-descCard">
                    <h4>Mobile Applications</h4>
                    <p>
                      Deliver a seamless experience to your users with custom
                      mobile applications designed for iOS and Android, ensuring
                      engagement, functionality, and intuitive navigation.
                    </p>
                    <Link to="/services/mobileApplications"><button>Learn more</button></Link>
                  </div>
                </div>
                {/* card5 */}
                <div className="services-itemsCard"  data-aos="fade-up">
                  <img src={cloudServiceImage} alt="cloud service image" />
                  <div className="services-descCard">
                    <h4>Cloud Services</h4>
                    <p>
                      Optimize operations with scalable cloud solutions that
                      offer flexibility, security, efficiency, agility,
                      collaboration, resilience, cost savings, enhanced
                      performance, and increased reliability.
                    </p>
                    <Link to="/services/cloudServices"><button>Learn more</button></Link>
                  </div>
                </div>
                {/* card6 */}
                <div className="services-itemsCard"  data-aos="fade-up">
                  <img src={salesForceImage} alt="sales force image" />
                  <div className="services-descCard">
                    <h4>Salesforce</h4>
                    <p>
                      Maximize customer relationship management with customized
                      Salesforce solutions that integrate seamlessly with your
                      business processes, drive productivity, and boost
                      engagement.
                    </p>
                    <Link to="/services/salesforce"><button>Learn more</button></Link>
                  </div>
                </div>
                {/* card7 */}
                <div className="services-itemsCard"  data-aos="fade-up">
                  <img src={healthCareItImage} alt="health card it image" />
                  <div className="services-descCard">
                    <h4>Health Care IT</h4>
                    <p>
                      Empower healthcare providers with secure, compliant IT
                      solutions that enhance patient care, streamline
                      operations, and enable valuable insights for improved
                      efficiency.
                    </p>
                    <Link  to="/services/healthCareIT"><button>Learn more</button></Link>
                  </div>
                </div>
                {/* card8 */}
                <div className="services-itemsCard"  data-aos="fade-up">
                  <img src={cyberSecurImage} alt="cyber security image" />
                  <div className="services-descCard">
                    <h4>Cyber Security</h4>
                    <p>
                      Safeguard your digital assets with proactive cybersecurity
                      measures that mitigate risks, enhance security, and
                      protect against evolving threats, ensuring protection.
                    </p>
                    <Link to="/services/cyberSecurity"><button>Learn more</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* why choose us component */}
      <WhyChooseUs />

      {/* home page contact card */}
      <ContactCard />

      {/* footer */}
      <Footer />
    </>
  );
};

export default Service;
