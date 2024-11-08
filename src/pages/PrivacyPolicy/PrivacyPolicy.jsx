import React from "react";
import "./privacypolicy.css";
import privacyImage from "/assets/privacy-image.svg";
import privacyIcon from "/assets/privacy-icon.svg";

const PrivacyPolicy = () => {
  return (
    <>

      <div className="container-fluid privacy-mainContainer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7">
              <div className="privacy-cont-card" data-aos="fade-up">
                <span>PRIVACY POLICY</span>
                <h3>Protecting Your Privacy at Adyah Tech</h3>
                <p>
                  Adyah Tech values the privacy of every visitor to our website,
                  www.adyahtech.com. This Privacy Policy details how we collect,
                  use, and protect the personal information you share with us.
                  By using our website and sharing your information, you consent
                  to the practices described below.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-5">
              <div className="privacy-img-card" data-aos="zoom-in">
                <img src={privacyImage} alt="privacy policy image" />
              </div>
            </div>

            <div className="col-12">
              {/* main privacy card */}
              <div className="privacy-main-content">
                {/* card1 */}
                <div className="privacy-inner-card" data-aos="fade-up">
                  {/* left card */}
                  <div className="privacy-left-card">
                    <img src={privacyIcon} alt="icon" />
                  </div>
                  {/* right card */}
                  <div className="privacy-righi-card">
                    <h4>Information Collection and Use</h4>
                    <p>
                      We collect personal information (such as your name,
                      address, phone number, and email address) to process your
                      applications and requests, manage obligations under any
                      agreements with you, and address issues with services
                      provided. We have implemented strict physical, electronic,
                      and managerial safeguards to protect this information.
                    </p>
                  </div>
                </div>
                {/* card2 */}
                <div className="privacy-inner-card" data-aos="fade-up">
                  {/* left card */}
                  <div className="privacy-left-card">
                    <img src={privacyIcon} alt="icon" />
                  </div>
                  {/* right card */}
                  <div className="privacy-righi-card">
                    <h4>Job Applications</h4>
                    <p>
                      If you wish to use this website to apply for job
                      opportunities but do not agree with our Privacy Policy,
                      please do not submit personal information.
                    </p>
                  </div>
                </div>

                {/* card3 */}
                <div className="privacy-inner-card" data-aos="fade-up">
                  {/* left card */}
                  <div className="privacy-left-card">
                    <img src={privacyIcon} alt="icon" />
                  </div>
                  {/* right card */}
                  <div className="privacy-righi-card">
                    <h4>User-Generated Content</h4>
                    <p>
                      If this website offers chat rooms, forums, blogs, or other
                      communication channels, we may collect the information you
                      share in these spaces. While we handle this data according
                      to our Privacy Policy, we are not responsible for any
                      third-party use of personal information that you make
                      publicly available on this site.
                    </p>
                  </div>
                </div>

                {/* card4 */}
                <div className="privacy-inner-card" data-aos="fade-up">
                  {/* left card */}
                  <div className="privacy-left-card">
                    <img src={privacyIcon} alt="icon" />
                  </div>
                  {/* right card */}
                  <div className="privacy-righi-card">
                    <h4>Third-Party Data Hosting</h4>
                    <p>
                      We may transfer your data to third-party providers solely
                      for data hosting purposes. This information remains
                      protected by Adyah Tech and is managed in line with this
                      Privacy Policy. We do not share personal information with
                      third parties without your consent unless legally required
                      or when necessary to protect our rights or the safety of
                      our users.
                    </p>
                  </div>
                </div>

                {/* card5 */}
                <div className="privacy-inner-card" data-aos="fade-up">
                  {/* left card */}
                  <div className="privacy-left-card">
                    <img src={privacyIcon} alt="icon" />
                  </div>
                  {/* right card */}
                  <div className="privacy-righi-card">
                    <h4>Children's Privacy Policy</h4>
                    <p>
                      If you are under 13 years old, please refrain from
                      submitting personal information. If you need to provide
                      such information, please have a parent or guardian submit
                      it on your behalf.
                    </p>
                  </div>
                </div>

                {/* card6 */}
                <div className="privacy-inner-card" data-aos="fade-up">
                  {/* left card */}
                  <div className="privacy-left-card">
                    <img src={privacyIcon} alt="icon" />
                  </div>
                  {/* right card */}
                  <div className="privacy-righi-card">
                    <h4>Use of Cookies</h4>
                    <p>
                      Cookies are small files stored on your device that allow
                      us to recognize you on return visits. Our cookies do not
                      contain personal data. You can disable cookies in your
                      browser settings, though this may limit some website
                      functionality. We encourage you to review the privacy
                      policies of third-party websites you visit through links
                      on our site to understand their cookie use.
                    </p>
                  </div>
                </div>

                {/* card7 */}
                <div className="privacy-inner-card" data-aos="fade-up">
                  {/* left card */}
                  <div className="privacy-left-card">
                    <img src={privacyIcon} alt="icon" />
                  </div>
                  {/* right card */}
                  <div className="privacy-righi-card">
                    <h4>Third-Party Websites</h4>
                    <p>
                      We are not responsible for the privacy practices of other
                      websites. If you navigate to or from our site via a
                      third-party link, please review their privacy policies.
                    </p>
                  </div>
                </div>

                {/* card8 */}
                <div className="privacy-inner-card" data-aos="fade-up">
                  {/* left card */}
                  <div className="privacy-left-card">
                    <img src={privacyIcon} alt="icon" />
                  </div>
                  {/* right card */}
                  <div className="privacy-righi-card">
                    <h4>Changes to This Policy</h4>
                    <p>
                      Adyah Tech may update this Privacy Policy to reflect the
                      latest changes. We encourage you to review it
                      periodically. The effective date of any updates will be
                      clearly indicated at the end of this document.
                    </p>

                    <p>
                      For questions regarding this Privacy Policy or to access
                      or update your personal data, please contact us
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default PrivacyPolicy;
