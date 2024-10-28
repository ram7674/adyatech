import React, { useRef, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  });

  const form = useRef();
  const toast = useRef();

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
      .sendForm('service_q1oznbs', 'template_hwumd7k', form.current, '7hqPKLGR6oPG4vOm6')
      .then(
        () => {
          console.log('SUCCESS!');
          window.alert('Email sent successfully!'); // Alert message on success;

          // Reset form after successful submission
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            service: "",
            // gender: "", // Uncomment if you need this
          });
        },
        (error) => {
          console.error('FAILED...', error.text);
          window.alert('Failed to send email. Please try again.');
        }
      );
  };

  return (
    <>

      {/* Navbar */}
      <Header />

      <div className="container-fluid contact-banner">
        <span>Contact Us</span>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="contact-address1">
              {/* Address Section */}
              <div className="contact-add-mainCard">
                <div className="address-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="address-desc">
                  <strong>Address:</strong> 123 Main Street, Hyderabad, Telangana, India
                </div>
              </div>

              <div className="contact-add-mainCard">
                <div className="address-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="address-desc">
                  <strong>Phone Number:</strong> +91 9876543210
                </div>
              </div>

              <div className="contact-add-mainCard">
                <div className="address-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="address-desc">
                  <strong>Email:</strong> contact@adyahtech.com
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
                <form ref={form} onSubmit={sendEmail}>
                  {/* Name */}
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

                  {/* Email */}
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
                    {/* Phone Number */}
                    <div className="form-group">
                      <label htmlFor="phoneNumber">Phone Number:</label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Choose Service */}
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
                        <option value="IT Staffing & Consulting">IT Staffing & Consulting</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile Applications">Mobile Applications</option>
                        <option value="Cloud Services">Cloud Services</option>
                        <option value="Cyber Security">Cyber Security</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
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

                  {/* Submit Button */}
                  <button className="form-sub-btn" type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Contact;
