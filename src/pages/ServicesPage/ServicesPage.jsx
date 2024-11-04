import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./servicespage.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ContactCard from "../../components/ContactCard/ContactCard";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

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
      {/* Navbar */}
      <Header />

      {/* Services Main Page */}
      <div className="container-fluid contact-mainBg">
        <span>OUR SERVICES</span>
        <h1>Empowering Digital Transformation</h1>
        <h4>Driving Success with Tailored Technology Solutions</h4>
        <p>
          At Adyah Tech, we provide comprehensive IT solutions that empower businesses to excel in an ever-evolving digital landscape. Our expertise spans IT staffing, data science, web development, and mobile applications—delivering scalable, customized solutions that foster growth and innovation.
        </p>
      </div>

      {/* Services Content */}
      {service && (
        <div className="container-fluid services-mainBg">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-lg-6">
                <div className="services-imageSec">
                  <img src={service.image} alt={service.title} className="services-page-img" />
                </div>
              </div>

              <div className="col-sm-12 col-lg-6">
                <div className="services-descSec">
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
                    <div className="services-rowCard" key={index}>
                      <div className="services-card-icon"></div>
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

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Services;
