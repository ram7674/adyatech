import React from "react";
import "./clients.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ContactCard from "../../components/ContactCard/ContactCard";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

import healthCare from '/assets/clients-healthCare.svg'
import finance from '/assets/clients-finance.svg'
import education from '/assets/clients-education.svg'
import logistics from '/assets/clients-logisticks.svg'
import telecommunication from '/assets/clients-telecom.svg'
import publicSelector from '/assets/clients-public.svg'

const Clients = () => {
  return (
    <>
      {/* navbar */}
      <Header />

      <div className="container-fluid Client-mainBg-contaner">
        <span>Our Valued Clients</span>
        <h1>
          Building Lasting Partnerships Across Industries
        </h1>
        <h4>
          Delivering Tailored IT Solutions to Drive Innovation Across Industries
        </h4>
        <p>
          Adyah Tech partners with industry-leading organizations to deliver
          innovative IT solutions that support growth and adaptability. With a
          client-first approach, we're committed to aligning our expertise with
          the unique objectives of each partner we serve.
        </p>
      </div>

      {/* clients content */}
      <div className="container-fluid clients-mainBg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="clients-titleCard">
                <span>INDUSTRIES WE SERVE</span>
                <h3>
                  Revolutionizing Industries Through Customized, Secure Digital
                  Services
                </h3>
              </div>

              <div className="clients-cards">
                {/* card1 */}
                <div className="clients-indu-cards">
                  <div className="clients-iconCard">
                    <div className="iconCard">
                      <img src={healthCare} alt="Health care icon" />
                    </div>
                    <h5>Healthcare</h5>
                  </div>

                  <div className="clients-innerCard">
                    <p>
                      Transforming patient care through secure, compliant
                      technology solutions tailored for the healthcare industry.
                      Our expertise ensures compliance with regulatory standards
                      and enhances the efficiency of patient management.
                    </p>
                  </div>
                </div>
                {/* card2 */}
                <div className="clients-indu-cards">
                  <div className="clients-iconCard">
                    <div className="iconCard">
                    <img src={finance} alt="Finance icon" />
                    </div>
                    <h5>Finance & E-commerce</h5>
                  </div>

                  <div className="clients-innerCard">
                    <p>
                      Empowering financial institutions & e-commerce platforms
                      with secure solutions that drive operational efficiency &
                      customer satisfaction. Our services include advanced data
                      analytics, fraud prevention, & user-centered digital
                      experiences.
                    </p>
                  </div>
                </div>
                {/* card3 */}
                <div className="clients-indu-cards">
                  <div className="clients-iconCard">
                    <div className="iconCard">
                    <img src={education} alt="Education icon" />
                    </div>
                    <h5>Education</h5>
                  </div>

                  <div className="clients-innerCard">
                    <p>
                      Delivering digital solutions for modern, efficient
                      educational experiences. Our services enable institutions
                      to leverage technology for enhanced learning,
                      administrative efficiency, and student engagement.
                    </p>
                  </div>
                </div>
                {/* card4 */}
                <div className="clients-indu-cards">
                  <div className="clients-iconCard">
                    <div className="iconCard">
                    <img src={logistics} alt="Logistics icon" />
                    </div>
                    <h5>Logistics & Manufacturing</h5>
                  </div>

                  <div className="clients-innerCard">
                    <p>
                      Streamlining operations through data analytics,
                      automation, and innovation. We enable logistics and
                      manufacturing companies to optimize processes, reduce
                      costs, and improve tracking and delivery precision
                    </p>
                  </div>
                </div>
                {/* card5 */}
                <div className="clients-indu-cards">
                  <div className="clients-iconCard">
                    <div className="iconCard">
                    <img src={telecommunication} alt="Telecommunications icon" />
                    </div>
                    <h5>Telecommunications</h5>
                  </div>

                  <div className="clients-innerCard">
                    <p>
                      Supporting the telecommunications sector with advanced
                      infrastructure, network solutions, and security measures
                      that boost connectivity, reduce downtime, and enhance
                      overall user experience and reliability.
                    </p>
                  </div>
                </div>
                {/* card6 */}
                <div className="clients-indu-cards">
                  <div className="clients-iconCard">
                    <div className="iconCard">
                      <img src={publicSelector} alt="Public Sector icon" />
                    </div>
                    <h5>Public Sector & Government</h5>
                  </div>

                  <div className="clients-innerCard">
                    <p>
                      Providing secure, scalable, and compliant solutions for
                      government agencies to improve public services, streamline
                      data management, enhance digital accessibility, and foster
                      citizen engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* why choose us component */}
      <WhyChooseUs />


      {/* home page contact component */}
      <ContactCard />

      {/* footer */}
      <Footer />
    </>
  );
};

export default Clients;
