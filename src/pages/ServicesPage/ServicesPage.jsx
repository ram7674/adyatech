import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./servicespage.css";

import ContactCard from "../../components/ContactCard/ContactCard";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

import arrowBrnIcon from "/assets/service-arrow-btn.svg";

// Import the JSON data
import data from "../../data/data.json";

const Services = () => {
  const { serviceId } = useParams(); // Get the serviceId from the URL
  const [service, setService] = useState(null); // State to hold the selected service

  // Fetch the relevant service data based on the serviceId
  useEffect(() => {
    if (serviceId && data.services[serviceId]) {
      setService(data.services[serviceId]);
    }
  }, [serviceId]);

  return (
    <>
      <Helmet>
        <title>Services | AdyahTech | IT Solutions & Consulting</title>
        <meta
          name="description"
          content="Adyah Tech offers a wide range of IT services including IT staffing, data science, web development, mobile applications, cloud services, Salesforce solutions, healthcare IT, and cybersecurity."
        />
        <meta
          name="keywords"
          content="IT staffing, consulting, data science, AI, web development, mobile apps, cloud solutions, Salesforce, healthcare IT, cybersecurity"
        />
        <meta name="author" content="AdyahTech" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Helmet>

      {/* Services Main Page */}
      <div className="container-fluid contact-mainBg" data-aos="fade-up">
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

      {/* Services Content */}
      {service && (
        <div className="container-fluid services-mainBg">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-5 col-lg-6">
                <div className="services-imageSec" data-aos="zoom-in">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="services-page-img"
                  />
                </div>
              </div>

              <div className="col-sm-12 col-md-7 col-lg-6">
                <div className="services-descSec" data-aos="fade-up">
                  <span>WHAT WE OFFER</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="services-rowContent">
                  {service.rowCards.map((card, index) => (
                    <div
                      className="services-rowCard"
                      key={index}
                      data-aos="fade-up"
                    >
                      <div className="services-card-icon">
                        <img src={arrowBrnIcon} alt={card.title} />
                      </div>
                      <div className="services-desc-card">
                        <h5>{card.title}</h5>
                        <p>{card.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* why choose us component */}
      <WhyChooseUs />

      {/* home page contact component */}
      <ContactCard />
    </>
  );
};

export default Services;
