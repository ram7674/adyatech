import React from "react";
import "./careers.css";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

import careersImg from "/assets/careers-Image.svg";
import careerStartImg from "/assets/carrers-starting.svg";
import careerSeekImg from "/assets/carrers-seeking.svg";

import ContactCard from "../../../src/components/ContactCard/ContactCard";
import { Helmet } from "react-helmet";

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>
          Careers at AdyahTech | Global Opportunities & Challenging Projects
        </title>
        <meta
          name="description"
          content="Explore career opportunities at Adyah Tech. We offer global exposure, challenging projects, and the chance to work with top-tier clients across various industries."
        />
        <meta
          name="keywords"
          content="careers, job opportunities, global careers, IT jobs, professional growth, mentorship, challenging projects, innovative IT solutions"
        />
        <meta name="author" content="AdyahTech" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Helmet>

      <div className="container-fluid contact-mainBg" data-aos="fade-up">
        <span>CAREERS</span>
        <h1>Shape Your Future with Adyah Tech</h1>
        <h4>Join a Team Committed to Innovation, Growth, and Impact</h4>
        <p>
          Whether you're starting your career or seeking new challenges as an
          experienced professional, Adyah Tech offers endless opportunities.
          Focused on client success and innovation, we empower our team to make
          a meaningful impact across industries. Here, your skills are valued,
          growth is nurtured, and contributions are recognized. Join us in
          building tomorrow's enterprise together.
        </p>
      </div>

      <div className="container-fluid careers-mainBg">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-5 col-lg-6">
              <div className="careers-imageSec" data-aos="zoom-in">
                <img src={careersImg} alt="careers image" />
              </div>
            </div>

            <div className="col-sm-12 col-md-7 col-lg-6">
              <div className="careers-descSec" data-aos="fade-left">
                <span>WHAT WE OFFER</span>
                <h3>Unlock Your Potential with Adyah Tech</h3>
                <p>
                  Discover a rewarding work environment where you're encouraged
                  to push your limits and realize your potential. Our mission is
                  to support you in reaching your aspirations, with the
                  recognition and opportunities you deserve. As we build
                  tomorrow's enterprise, our people remain at the heart of our
                  journey—past, present, and future.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="careers-rowContent">
                {/* card1 */}
                <div className="careers-rowCard" data-aos="fade-up">
                  <div className="careers-desc-card">
                    <div className="careers-card-icon">
                      <img
                        src={careerStartImg}
                        alt="Starting Your Career Journey"
                      />
                    </div>
                    <h5>Starting Your Career Journey?</h5>
                  </div>
                  <p>
                    At Adyah Tech, we provide a unique platform for individuals
                    who are just beginning their professional journey. With
                    diverse, challenging opportunities in a wide range of
                    industries, we offer you the chance to work with top-tier
                    clients around the globe. Whether you're fresh out of school
                    or early in your career, our experienced counselors are here
                    to guide you. We'll support you in choosing the right path
                    by exposing you to the latest technologies and providing a
                    world of opportunity to start your career on the right
                    track.
                  </p>
                </div>
                {/* card2 */}
                <div className="careers-rowCard" data-aos="fade-up">
                  <div className="careers-desc-card">
                    <div className="careers-card-icon">
                      <img src={careerSeekImg} alt="Seeking Fresh Challenges" />
                    </div>
                    <h5>
                      Seeking Fresh Challenges as an Experienced Professional?
                    </h5>
                  </div>
                  <p>
                    For seasoned professionals, Adyah Tech is the ideal place to
                    elevate your career to new heights. With our rapid growth
                    and global expansion, we bring exciting challenges as we
                    solve complex problems for clients and explore uncharted
                    frontiers. Here, you'll find a collaborative environment
                    where innovative ideas are encouraged, enabling you to
                    transform operations and leverage advanced technologies that
                    empower clients to stay ahead of economic uncertainties.
                    Join us and be part of a team that drives impactful change
                    and shapes the future of technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* why choose us component */}
      <WhyChooseUs />

      <ContactCard />
    </>
  );
};

export default Careers;
