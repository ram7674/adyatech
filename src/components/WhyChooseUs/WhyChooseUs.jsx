import React from "react";
import "./whychooseus.css";
import whyChooseImg from "/assets/why-chooseimg.svg";

import innoStrategy from "/assets/innovation-strategies-icon.svg";
import provenSuccess from "/assets/proven-success-icon.svg";
import support from "/assets/support-icon.svg";
import trustPar from "/assets/trusted-part-icon.svg";

const WhyChooseUs = () => {
  return (
    <>
      {/* why choose us */}
      <div className="container-fluid why-chooseMainBg">
        <div className="container">
          <div className="row">
            {/* left card */}
            <div className="col-lg-6">
              <div className="why-choose-parent">
                <span>WHY CHOOSE US</span>
                <h4 className="why-choose-mainTit">
                  Results-Driven Digital Solutions Tailored for You
                </h4>
                <p>
                  At Adyah Tech, we deliver cutting-edge digital marketing
                  solutions designed to elevate your brand in a competitive
                  landscape. Our team of experts is committed to driving
                  measurable growth, enhancing brand presence, and ensuring
                  long-term success for your business.
                </p>
                <div className="why-choose-child">
                  {/* child1 */}
                  <div className="why-choose-card">
                    <div className="why-iconCard">
                      <img src={innoStrategy} alt="Innovative Strategies icon" />
                    </div>
                    <h4>Innovative Strategies</h4>
                    <p>
                      Our team drives growth through data-backed digital
                      marketing strategies that adapt to your unique needs.
                    </p>
                  </div>
                  {/* child2 */}
                  <div className="why-choose-card">
                    <div className="why-iconCard">
                      <img src={provenSuccess} alt="Innovative Strategies icon" />
                    </div>
                    <h4>Proven Success</h4>
                    <p>
                      With decades of proven experience and an impressive track
                      record of successful projects across worldwide.
                    </p>
                  </div>
                  {/* child3 */}
                  <div className="why-choose-card">
                    <div className="why-iconCard">
                      <img src={support} alt="Innovative Strategies icon" />
                    </div>
                    <h4>24/7 Support </h4>
                    <p>
                      Our round-the-clock support ensures your business runs
                      smoothly, backed by comprehensive protocols.
                    </p>
                  </div>
                  {/* child4 */}
                  <div className="why-choose-card">
                    <div className="why-iconCard">
                      <img src={trustPar} alt="Innovative Strategies icon" />
                    </div>
                    <h4>Trusted Partnerships</h4>
                    <p>
                      Partnered with renowned industry leaders globally,
                      recognized consistently for our commitment to quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* right card */}
            <div className="col-lg-6">
              <div className="why-choose-left">
                <img
                  src={whyChooseImg}
                  alt=" experience"
                  className="why-choose-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
