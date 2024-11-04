import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./about.css";
import goalImg from "../../../public/assets/about-goal-image.svg";
import aboutTeamImg from "../../../public/assets/about-team-image.svg";
import ContactCard from "../../components/ContactCard/ContactCard";
import OurCulture from "../../components/OurCulture/OurCulture";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

const About = () => {
  return (
    <>
      {/* navbar component*/}
      <Header />

      <div className="container-fluid contact-mainBg">
        <span>ABOUT US</span>
        <h1>Empowering Growth through Technology</h1>
        <h4>Your Trusted Partner for Comprehensive IT Solutions</h4>
        <p>
          Adyah Tech empowers businesses through innovative, cost-effective
          solutions across IT staffing, data science, web development, and
          mobile applications your single source for digital success.
        </p>
      </div>

      {/* our culture contaier */}
      <OurCulture />

      {/* above page */}
      <div className="container-fluid about-mainbg">
        <div className="container">
          <div className="row">
            {/* Text Section */}
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="about_mainCard">
                <span>OUR GOAL</span>
                <h3>Expertise, Innovation, and Client Focus</h3>
                <p>
                  With a deep understanding of diverse industries, Adyah Tech
                  combines advanced technology with strategic insights to
                  deliver reliable, scalable solutions. From IT staffing to data
                  science and mobile applications, we're committed to solving
                  challenges with agility and a client-first approach that
                  ensures measurable results.
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="about-cardImg">
                <img src={goalImg} alt="About Us image" className="img-fluid" />
              </div>
            </div>
          </div>

          <div className="row">
            {/* Image Section */}
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="about-cardImg">
                <img
                  src={aboutTeamImg}
                  alt="About Us image"
                  className="img-fluid"
                />
              </div>
            </div>
            {/* Text Section */}
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="about_mainCard">
                <span>OUR TEAM</span>
                <h3>Experienced Professionals, Driven by Passion</h3>
                <p>
                  Adyah Tech's team is composed of skilled professionals with a
                  wealth of experience in technology and business consulting.
                  Each team member brings a deep understanding of their field,
                  from data science to mobile development, contributing unique
                  insights that fuel our innovative solutions. Our collaborative
                  spirit fosters continuous learning and creativity, ensuring we
                  deliver the best possible outcomes for our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* why choose us component */}
      <WhyChooseUs />
  

      {/* home page contact card component */}
      <ContactCard />

      {/* footer component */}
      <Footer />
    </>
  );
};

export default About;
