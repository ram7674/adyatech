import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
    service: "",
    gender: "", 
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your EmailJS user ID, service ID, and template ID
    const serviceID = "service_q1oznbs";
    const templateID = "__ejs-test-mail-service__";
    const userID = "7hqPKLGR6oPG4vOm6";


    // Send email using EmailJS
    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        // Optionally reset form fields
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          message: "",
          service: "",
          gender: "",
        });
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
      });
  };

  return (
    <>
      <Header />

      <div className="container-fluid contact-banner">
        <span>Contact Us</span>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="contact-address1">
              <div className="contact-add-mainCard">
                <div className="address-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="address-desc">
                  <strong>Address:</strong> 123 Main Street, Hyderabad,
                  Telangana, India
                </div>
              </div>

              <div className="contact-add-mainCard">
                <div className="address-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="address-desc">
                  <strong>Phone Number:</strong>
                  +91 9876543210
                </div>
              </div>

              <div className="contact-add-mainCard">
                <div className="address-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="address-desc">
                  <strong>Email:</strong>
                  contact@adyahtech.com
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="contact-form-mainbg">
              <div className="contact-address-data">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.0450819579573!2d78.47208957500948!3d17.361563583521164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb978a6e1a939b%3A0xcb5a69e4aaf113fb!2sCharminar!5e0!3m2!1sen!2sin!4v1729934850690!5m2!1sen!2sin"
                  className="contact-form-map"
                  style={{ border: 0, width: "100%" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="contact-form-container">
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="phone-choose-service">
                    <div className="form-group">
                      <label htmlFor="phoneNumber">Phone Number:</label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="service">Choose Service:</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="IT Staffing & Consulting">
                          IT Staffing & Consulting
                        </option>
                        <option value="Data Science">Data Science</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile Applications">
                          Mobile Applications
                        </option>
                        <option value="Cloud Services">Cloud Services</option>
                        <option value="Cyber Security">Cyber Security</option>
                        <option value="Cyber Security1">Cyber Security1</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message:</label>
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

                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
