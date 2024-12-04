import React from "react";
import "./about.css";
import { Helmet } from "react-helmet";

import ContactCard from "../../components/ContactCard/ContactCard";
import OurCulture from "../../components/OurCulture/OurCulture";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

import goalImg from "/assets/about-goal-image.svg";
import aboutTeamImg from "/assets/about-team-image.svg";


const About = () => {
  return (
    <>
      <Helmet>
        <title>
          About Us | AdyahTech | IT Solutions & Technology Consulting
        </title>
        <meta
          name="description"
          content="Adyah Tech is an IT solutions and consulting firm, offering industry-leading services in technology optimization and client-driven IT solutions across the USA and India."
        />
        <meta
          name="keywords"
          content="IT solutions, technology consulting, IT staffing, data science, business IT solutions, Georgia IT firm, Adyah Tech, IT optimization, offshore development"
        />
        <meta name="author" content="AdyahTech" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Helmet>

      <div className="container-fluid contact-mainBg" data-aos="fade-up">
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
            <div className="col-lg-6 col-md-7 col-sm-12">
              <div className="about_mainCard" data-aos="fade-right">
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
            <div className="col-lg-6 col-md-5 col-sm-12">
              <div className="about-cardImg" data-aos="zoom-in">
                <img src={goalImg} alt="About Us image" className="img-fluid" />
              </div>
            </div>
          </div>

          <div className="row">
            {/* Image Section */}
            <div className="col-lg-6 col-md-5 col-sm-12 order-smDv">
              <div className="about-cardImg" data-aos="zoom-in">
                <img
                  src={aboutTeamImg}
                  alt="About Us image"
                  className="img-fluid"
                />
              </div>
            </div>
            {/* Text Section */}
            <div className="col-lg-6 col-md-7 col-sm-12 order-smlg">
              <div className="about_mainCard" data-aos="fade-up">
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
    </>
  );
};

export default About;
