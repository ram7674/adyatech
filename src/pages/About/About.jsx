import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import aboutImg from "/assets/about-page.jpg";
import "./about.css";
import visionImg from '../../../public/assets/vision.png'

const About = () => {
  return (
    <>
      {/* navbar */}
      <Header />

      {/* above page */}
      <div className="container-fluid about-mainbg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="about_mainCard">
                <div className="about-cardImg">
                  <img src={aboutImg} alt="About Us image" />
                </div>
                <div className="about_insideCard">
                  <h1>About Us</h1>
                  <h3>
                    Adyah Tech: "Your Trusted Partner for Comprehensive IT
                    Solutions and Consulting"
                  </h3>
                  <p>
                    Adyah Tech is an IT solutions and technology consulting firm
                    founded by proficient professionals in the technical
                    solutions and consulting optimization space. Serving clients
                    across local and national markets, Adyah Tech is the single
                    source for IT needs. Headquartered in Georgia, USA, with an
                    offshore development facility in India, Adyah Tech combines
                    industry knowledge, real-world experience, and
                    cost-effective service offerings to establish itself as a
                    top provider in the Georgia state market. Our commitment to
                    client success drives our rapid growth despite challenging
                    economic conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container vision-mainbg">
        <div className="row">

          <div className="col-4">
            <div className="vision">
              <div className="vision-cardimg">
                <img src={visionImg} alt="vision image" />
              </div>
              <div className="vision-text">
                <h4>Vision</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aliquid eligendi eum minus.</p>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="vision">
              <div className="vision-cardimg">
                <img src={visionImg} alt="vision image" />
              </div>
              <div className="vision-text">
                <h4>Mission</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aliquid eligendi eum minus.</p>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="vision">
              <div className="vision-cardimg">
                <img src={visionImg} alt="vision image" />
              </div>
              <div className="vision-text">
                <h4>Values</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aliquid eligendi eum minus.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
};

export default About;
