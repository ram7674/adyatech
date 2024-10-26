import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./home.css";
import service1 from "/assets/digital_signaged.png";
import experience from "/assets/years-of-it-experience.jpg";

const Home = () => {
  return (
    <>
      {/* navbar */}
      <Header />

      {/* content here */}
      <div className="container-fluid hero_section">
        <div className="row">
          {/* Video section */}
          <div className="col-12 wow fadeInRight">
            <video className="video-bg" autoPlay muted loop>
              <source src="/assets/hero-sec-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Container for content */}
      <div className="container hero_content">
        <div className="row">
          <div className="col-md-6 col-12 hero_content_card">
            <h1>
              Innovative IT Solutions for Your Business Success
            </h1>
            <p>
              Empowering your business with cutting-edge IT staffing, data
              science, and consulting services
            </p>
          </div>

          {/* GIF section */}
          <div className="col-md-6 col-12 hero_gif_card">
            <img src="/assets/it-consulting.gif" alt="IT Consulting GIF" />
          </div>
        </div>
      </div>

      {/* welcome */}
      <div className="container-fluid" style={{background: "#1c8ac9"}}>
        <div className="container">
          <div className="row welcome-MainBg">
          <h1>Welcome To Adyah Tech</h1>
            <div className="col-lg-10">
              
              <div className="welcome-card">
                <h3>Empowering Your Business with Cutting-Edge IT Solutions</h3>
                <p>
                  At Adyah Tech, we provide innovative IT staffing, consulting,
                  and data science solutions to empower your business in a
                  rapidly evolving digital world. Our team of experts delivers
                  results that drive efficiency, growth, and success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* what we do section */}
      <div className="container-fluid what-main-cardSec">
        <div className="container">
          <div className="row">
            <h1>What We Do</h1>

            <div className="col-6  wow fadeInLeft">
              <div className="what-sectionCard">
                <img
                  src={service1}
                  alt="IT Staffing & Consulting image"
                  className=""
                />
                <div className="what-card">
                  <h3>IT Staffing & Consulting</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nesciunt placeat ab ex expedita inventore officiis amet.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-6  wow fadeInLeft">
              <div className="what-sectionCard">
                <img
                  src={service1}
                  alt="IT Staffing & Consulting image"
                  className=""
                />
                <div className="what-card">
                  <h3>Data Science</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nesciunt placeat ab ex expedita inventore officiis amet.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="what-sectionCard">
                <img
                  src={service1}
                  alt="IT Staffing & Consulting image"
                  className=""
                />
                <div className="what-card">
                  <h3>Web Development</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nesciunt placeat ab ex expedita inventore officiis amet.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="what-sectionCard">
                <img
                  src={service1}
                  alt="IT Staffing & Consulting image"
                  className=""
                />
                <div className="what-card">
                  <h3>Mobile Applications</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nesciunt placeat ab ex expedita inventore officiis amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact */}
      <div className="container-fluid contact-mainhomebg">
        <div className="row">
          <div className="col-12">
            <div className="contact-home-page">
              <h2>
                Ready to take your business to the next level? Let's talk!
              </h2>
              <button>CONTACT US</button>
            </div>
          </div>
        </div>
      </div>

      {/* why choose us */}
      <div className="container-fluid">
        <div className="container">
          <div className="row why-chooseMainBg">
            <h1>Why Choose Us</h1>

            {/* card1 */}
            <div className="col-lg-4">
              <div className="why-choose-parent">
                <div className="why-chooose-card">
                  <img
                    src={experience}
                    alt=" experience"
                    className="why-choose-img"
                  />
                  <h4>Over 10 years of IT experience</h4>
                  <p>
                    We bring a wealth of expertise in navigating complex IT
                    challenges. Our decade-long journey ensures quality
                    solutions tailored for your needs.
                  </p>
                </div>
              </div>
            </div>
            {/* card2 */}
            <div className="col-lg-4">
              <div className="why-choose-parent why-choose-parent2">
                <div className="why-chooose-card">
                  <img
                    src={experience}
                    alt=" experience"
                    className="why-choose-img"
                  />
                  <h4>Customized, innovative solutions</h4>
                  <p>
                    We craft unique strategies that align with your business
                    goals. Our focus is on delivering innovative solutions that
                    drive results.
                  </p>
                </div>
              </div>
            </div>
            {/* card3 */}
            <div className="col-lg-4">
              <div className="why-choose-parent">
                <div className="why-chooose-card">
                  <img
                    src={experience}
                    alt=" experience"
                    className="why-choose-img"
                  />
                  <h4>Proven track record of client success</h4>
                  <p>
                    Our history is marked by numerous satisfied clients who have
                    thrived with our help. We take pride in fostering lasting
                    partnerships built on success.
                  </p>
                </div>
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

export default Home;
