import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ContactCard from "../../components/ContactCard/ContactCard";
import OurCulture from "../../components/OurCulture/OurCulture";

import homePageImg from "/assets/home-pageimg.svg";
import whyChooseImg from "/assets/why-chooseimg.svg";
import whatWeDoImage from "/assets/what-we-do-Image.svg";
import ConsultaionImg from "../../../public/assets/how-it-conusultant-img.svg"
import DiscussionImg from "../../../public/assets/how-it-discussion-img.svg"
import ExecutionImg from "../../../public/assets/how-it-execution-img.png"
import ArrowImg from "../../../public/assets/how-it-arrow-img.svg"


const Home = () => {
  return (
    <>
      {/* navbar */}
      <Header />

      {/* home page */}
      <div className="container-fluid hero_section">
        <div className="container">
          <div className="row">
            {/*  */}
            <div className="col-lg-6 hero_content_card">
              <span>WELCOME TO ADYAH TECH</span>
              <h1>Innovative IT Solutions for Your Business Success</h1>
              <p>
                Empowering your business with cutting-edge IT staffing, data
                science, and consulting services
              </p>
              <button>Contact Now</button>
            </div>
            {/*  */}
            <div className="col-md-6 col-lg-6 hero_gif_card">
              <img src={homePageImg} alt="IT Consulting GIF" />
            </div>
          </div>
        </div>
      </div>

      {/* our culture contaier */}
      <OurCulture />

      {/* what-we-do section */}
      <div className="container-fluid why-we-secBg">
        <div className="container">
          <div className="row">
            {/* left card */}
            <div className="col-lg-6">
              <div className="why-secParent">
                <span>WHAT WE DO</span>
                <h4>Elevate Your Digital Impact with Customized Solutions</h4>
                <p>
                  At Adyah Tech, we provide innovative IT staffing, consulting,
                  and data science solutions to empower your business in a
                  rapidly evolving digital world. Our team of experts delivers
                  results that drive efficiency, growth, and success.
                </p>
                <div className="why-secChild">
                  <h5>Innovative Strategies</h5>
                  <h5>Industry Expertise</h5>
                  <h5>Client - Centered Service</h5>
                  <h5>Clear & Flexible Pricing</h5>
                  <h5>Innovative Solutions</h5>
                  <h5>Enhanced User Experience</h5>
                </div>
                <button>Know More</button>
              </div>
            </div>

            {/* right card */}
            <div className="col-lg-6">
              <div className="why-choose-left">
                <img
                  src={whatWeDoImage}
                  alt=" experience"
                  className="why-choose-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* what we offer */}
      <div className="offer-mainContainer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="offer-container">
                {/* tittle section */}
                <div className="offer-titleCard">
                  <span>WHAT WE OFFER</span>
                  <h4>
                    Delivering IT solutions that enable you to work smarter
                  </h4>
                </div>

                {/* inner main card */}
                <div className="offers-dataCard">
                  {/* card1 */}
                  <div className="offers-card">
                    <div className="offer-icon-card">
                      <div className="offer-icon"></div>
                      <h4>IT Staffing & Consulting</h4>
                    </div>

                    <div className="inner-card-data">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sed reiciendis incidunt aspernatur possimus facere
                        minima tempore o
                      </p>
                      <button>Learn more</button>
                    </div>
                    <div className="offer-gradient"></div>
                  </div>
                  {/* card2 */}
                  <div className="offers-card">
                    <div className="offer-icon-card">
                      <div className="offer-icon"></div>
                      <h4>IT Staffing & Consulting</h4>
                    </div>

                    <div className="inner-card-data">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sed reiciendis incidunt aspernatur possimus facere
                        minima tempore o
                      </p>
                      <button>Learn more</button>
                    </div>
                    <div className="offer-gradient"></div>
                  </div>
                  {/* card3 */}
                  <div className="offers-card">
                    <div className="offer-icon-card">
                      <div className="offer-icon"></div>
                      <h4>IT Staffing & Consulting</h4>
                    </div>

                    <div className="inner-card-data">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sed reiciendis incidunt aspernatur possimus facere
                        minima tempore o
                      </p>
                      <button>Learn more</button>
                    </div>
                    <div className="offer-gradient"></div>
                  </div>
                  {/* card4 */}
                  <div className="offers-card">
                    <div className="offer-icon-card">
                      <div className="offer-icon"></div>
                      <h4>IT Staffing & Consulting</h4>
                    </div>

                    <div className="inner-card-data">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sed reiciendis incidunt aspernatur possimus facere
                        minima tempore o
                      </p>
                      <button>Learn more</button>
                    </div>
                    <div className="offer-gradient"></div>
                  </div>
                  {/* card5 */}
                  <div className="offers-card">
                    <div className="offer-icon-card">
                      <div className="offer-icon"></div>
                      <h4>IT Staffing & Consulting</h4>
                    </div>

                    <div className="inner-card-data">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sed reiciendis incidunt aspernatur possimus facere
                        minima tempore o
                      </p>
                      <button>Learn more</button>
                    </div>
                    <div className="offer-gradient"></div>
                  </div>
                  {/* card6 */}
                  <div className="offers-card">
                    <div className="offer-icon-card">
                      <div className="offer-icon"></div>
                      <h4>IT Staffing & Consulting</h4>
                    </div>

                    <div className="inner-card-data">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sed reiciendis incidunt aspernatur possimus facere
                        minima tempore o
                      </p>
                      <button>Learn more</button>
                    </div>
                    <div className="offer-gradient"></div>
                  </div>
                  {/* card7 */}
                  <div className="offers-card">
                    <div className="offer-icon-card">
                      <div className="offer-icon"></div>
                      <h4>IT Staffing & Consulting</h4>
                    </div>

                    <div className="inner-card-data">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sed reiciendis incidunt aspernatur possimus facere
                        minima tempore o
                      </p>
                      <button>Learn more</button>
                    </div>
                    <div className="offer-gradient"></div>
                  </div>
                  {/* card8 */}
                  <div className="offers-card">
                    <div className="offer-icon-card">
                      <div className="offer-icon"></div>
                      <h4>IT Staffing & Consulting</h4>
                    </div>

                    <div className="inner-card-data">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sed reiciendis incidunt aspernatur possimus facere
                        minima tempore o
                      </p>
                      <button>Learn more</button>
                    </div>
                    <div className="offer-gradient"></div>
                  </div>
                  {/* card9 */}
                  <div className="offers-card">
                    <div className="offer-icon-card">
                      <div className="offer-icon"></div>
                      <h4>IT Staffing & Consulting</h4>
                    </div>

                    <div className="inner-card-data">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sed reiciendis incidunt aspernatur possimus facere
                        minima tempore o
                      </p>
                      <button>Learn more</button>
                    </div>
                    <div className="offer-gradient"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* how it works */}
      <div className="container-fluid how-it-work-MainBg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="how-it-tit-card">
                <span>HOW IT WORKS</span>
                <h3>Your Path to Success How We Deliver Results</h3>
              </div>
              <div className="how-it-card">
                <div className="how-it-image-Sec">
                  <img src={ConsultaionImg} alt="Consultation" />
                  <h4>Consultation</h4>
                </div>
                <img src={ArrowImg} alt="arrow image" />
                <div className="how-it-image-Sec">
                  <img src={DiscussionImg} alt="Discussion & Planning" />
                  <h4>Discussion & Planning</h4>
                </div>
                <img src={ArrowImg} alt="arrow image" />
                <div className="how-it-image-Sec">
                  <img src={ExecutionImg} alt="Execution" />
                  <h4>Execution</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                    <div className="why-iconCard"></div>
                    <h4>Innovative Strategies</h4>
                    <p>
                      Our team drives growth through data-backed digital
                      marketing strategies that adapt to your unique needs.
                    </p>
                  </div>
                  {/* child2 */}
                  <div className="why-choose-card">
                    <div className="why-iconCard"></div>
                    <h4>Innovative Strategies</h4>
                    <p>
                      Our team drives growth through data-backed digital
                      marketing strategies that adapt to your unique needs.
                    </p>
                  </div>
                  {/* child3 */}
                  <div className="why-choose-card">
                    <div className="why-iconCard"></div>
                    <h4>Innovative Strategies</h4>
                    <p>
                      Our team drives growth through data-backed digital
                      marketing strategies that adapt to your unique needs.
                    </p>
                  </div>
                  {/* child4 */}
                  <div className="why-choose-card">
                    <div className="why-iconCard"></div>
                    <h4>Innovative Strategies</h4>
                    <p>
                      Our team drives growth through data-backed digital
                      marketing strategies that adapt to your unique needs.
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

      {/* home page contact card */}
      <ContactCard />

      {/* footer */}
      <Footer />
    </>
  );
};

export default Home;
