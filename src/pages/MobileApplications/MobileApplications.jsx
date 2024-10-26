import React from "react";
import "./mobileapplications.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const MobileApplications = () => {
  return (
    <>
      {/* navbar */}
      <Header />

      {/* content here */}
      <div style={{ height: "600px" }}>
        <div>Mobileapplications</div>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
};

export default MobileApplications;
