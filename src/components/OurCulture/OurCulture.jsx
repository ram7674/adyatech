import React from "react";
import "./ourculture.css";

const OurCulture = () => {
  return (
    <>
      <div className="container-fluid our-culture-mainBg">
        <div className="container">
          <div className="row">
            <div className="col-12 culture-cardMain">
              <span>OUR CULTURE</span>
              <div className="culture-card">
                {/* mission card1 */}
                <div className="culture-inner-card" data-aos="zoom-in">
                  <h4>Mission</h4>
                  <p>
                    Adyah Tech was founded to provide cutting-edge IT solutions
                    that simplify complexity and deliver results.
                  </p>
                </div>
                {/* vision card3 */}
                <div className="culture-inner-card" data-aos="zoom-in">
                  <h4>Vision</h4>
                  <p>
                    Transforming IT to empower businesses to excel in a dynamic
                    digital landscape.
                  </p>
                </div>
                {/* values card3 */}
                <div className="culture-inner-card" data-aos="zoom-in">
                  <h4>Values</h4>
                  <p>
                    Integrity, client-first, quality in everything we do, and
                    employee development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCulture;
