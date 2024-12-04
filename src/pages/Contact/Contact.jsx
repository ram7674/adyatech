import React, { useRef, useState } from "react";
import "./contact.css";
import { Helmet } from "react-helmet";

import emailjs from "@emailjs/browser";

import contactImg from "/assets/contact-page-image.svg";
import contactCallIcon from "/assets/contact-call-icon.svg";
import contactMaillIcon from "/assets/contact-mail-icon.svg";
import contactAddressIcon from "/assets/contact-address-icon.svg";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  });

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qmubk99",
        "template_k5ulwup",
        form.current,
        "aVSqEknYRxO-b_XaL"
      )
      .then(
        () => {
          // Reset form after successful submission
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            service: "",
            // gender: "", // Uncomment if you need this
          });

          //console.log("SUCCESS!");
          window.alert("Email sent successfully!"); // Alert message on success;
        },
        (error) => {
          console.error("FAILED...", error.text);
          window.alert("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | AdyahTech | Get in Touch for IT Solutions</title>
        <meta
          name="description"
          content="Contact Adyah Tech for IT staffing, data science, web development, mobile applications, and other technology solutions. Get in touch today for customized IT services."
        />
        <meta
          name="keywords"
          content="contact us, IT staffing, data science, web development, mobile applications, technology solutions, tech services"
        />
        <meta name="author" content="AdyahTech" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Helmet>

      {/* contact main container */}
      <div className="container-fluid contact-mainBg" data-aos="fade-up">
        <span>CONTACT US</span>
        <h1>Let's Build the Future Together!</h1>
        <h4>Looking to elevate your business with innovative IT solutions?</h4>
        <p>
          Adyah Tech is here to help! From expert staffing to data science and
          custom web and mobile solutions, let's make your vision a reality. Get
          in touch, and let's create something extraordinary together!
        </p>
      </div>

      {/* contact form container */}
      <div className="container-fluid contact-inputBg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-form-mainbg">
                <div className="contact-imageCard" data-aos="zoom-in">
                  <img src={contactImg} alt="contact Img" />
                </div>

                <div className="contact-form-container" data-aos="fade-up">
                  <div className="contact-contInp">
                    <span>LET US CONNECT WITH YOU</span>
                    <h3>Have an Idea in Mind?</h3>
                    <h4>We'll Help You Bring It to Life</h4>
                  </div>
                  <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="form-mainCont"
                  >
                    {/* Name  inpuit*/}
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Type your full name ? "
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="form-group">
                      <label htmlFor="email">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Type your email ? "
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    {/* Phone Number */}
                    <div className="form-group">
                      <label htmlFor="phoneNumber">Your Phone Number</label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phone"
                        placeholder="Type your phone number ? "
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Choose Service */}
                    <div className="form-group">
                      <label htmlFor="service">Select Service</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="" className="select_bg">
                          Select a service you want ?
                        </option>
                        <option
                          value="IT Staffing & Consulting"
                          className="select_bg"
                        >
                          IT Staffing & Consulting
                        </option>
                        <option value="Data Science" className="select_bg">
                          Data Science
                        </option>
                        <option value="Web Development" className="select_bg">
                          Web Development
                        </option>
                        <option
                          value="Mobile Applications"
                          className="select_bg"
                        >
                          Mobile Applications
                        </option>
                        <option value="Cloud Services" className="select_bg">
                          Cloud Services
                        </option>
                        <option value="Cyber Security" className="select_bg">
                          Cyber Security
                        </option>
                        <option value="SalesForce" className="select_bg">
                          SalesForce
                        </option>
                        <option value="Health CareIT" className="select_bg">
                          Health CareIT
                        </option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="form-group-message">
                      <label htmlFor="message">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Let us know what you're thinking!..."
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button className="form-sub-btn" type="submit">
                      Let's Connect
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact address container */}
      <div className="container-fluid contact-maps-mainCard">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-addresCont">
                {/* left card */}
                <div className="contact-addresLeft" data-aos="fade-up">
                  {/* card1 */}
                  <div className="address-detailsCard">
                    <h4>Let's Talk</h4>
                    <div className="address-iconsCard">
                      <div className="address-iconCont">
                        <img src={contactCallIcon} alt="contact call icon" />
                      </div>
                      <span>+1 (470) - 508 - 5128</span>
                    </div>
                  </div>
                  {/* card2 */}
                  <div className="address-detailsCard">
                    <h4>Get Connect</h4>
                    <div className="address-iconsCard">
                      <div className="address-iconCont">
                        <img src={contactMaillIcon} alt="contact call icon" />
                      </div>

                      <span>info@adyahtech.com</span>
                    </div>
                  </div>
                  {/* card3 */}
                  <div className="address-detailsCard">
                    <h4>Find Us</h4>
                    <div className="address-iconsCard">
                      <div className="address-iconCont">
                        <img src={contactAddressIcon} alt="contact call icon" />
                      </div>

                      <span>
                        4555 Mansell Rd # 300 Alpharetta, GA 30022, USA
                      </span>
                    </div>
                  </div>
                </div>
                {/* right card */}
                <div className="contact-addresRight" data-aos="fade-up">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.1684487693356!2d-84.29057902441852!3d34.0395498731616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f575411b3309b3%3A0x793d535632df88c9!2s4555%20Mansell%20Rd%20%23%20300%2C%20Alpharetta%2C%20GA%2030022%2C%20USA!5e0!3m2!1sen!2sin!4v1731304787985!5m2!1sen!2sin"
                    className="contact-formCont"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
