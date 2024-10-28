import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./clients.css";
import clientsImg from "../../../public/assets/about-page.jpg";

const Clients = () => {
  return (
    <>
      <Header />

      {/* banner */}
      <div className="container-fluid clients-banner">
        <span>Clients</span>
      </div>

      {/* clients content */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="clients-title-sec">
              <h1>Our Clients</h1>
              <p>
                Adyah Tech serves clients across a spectrum of industries
                through accurate insight, robust innovation, and demonstrated
                ability. Adyah Tech serves these prestigious clients either
                directly or indirectly.
              </p>
            </div>
          </div>

          <div className="col-12">
            <div className="clients-maincard">
              <div className="clients-imageSec">
                <h1>Trusted Partnerships</h1>
                <p>At Adyah Tech, we collaborate with some of the most respected companies in the industry. Our clients range from emerging startups to established enterprises, all united by their trust in our capabilities. We provide tailored solutions that empower their business operations and drive growth.</p>
                <img src={clientsImg} alt="clients image" />
              </div>

              <div className="clients-Contents">
                <div className="clients-sec1">
                  <div className="clients-card">
                    <h4>Federal & State Government</h4>
                    <p>
                      Supporting federal and state clients in using IT to drive
                      value-based business outcomes.
                    </p>
                  </div>
                  <div className="clients-card">
                    <h4>Financial/Banking/Mortgage</h4>
                    <p>
                      Rapid, innovative solutions for an industry focused on
                      efficiency and bottom-line results.
                    </p>
                  </div>
                  <div className="clients-card">
                    <h4>Healthcare/Pharma</h4>
                    <p>
                      Technology solutions for hospitals, health systems,
                      insurance companies, and more, with a focus on compliance
                      and operational efficiency.
                    </p>
                  </div>
                </div>

                <div className="clients-sec2">
                  <div className="clients-card">
                    <h4>Telecom</h4>
                    <p>
                      Advanced telecommunications and OSS systems integration to
                      capitalize on new market opportunities.
                    </p>
                  </div>
                  <div className="clients-card">
                    <h4>Others</h4>
                    <p>
                      Expanding technology solutions to various other industries
                      based on proven success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Clients;
