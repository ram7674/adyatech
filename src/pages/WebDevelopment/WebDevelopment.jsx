import React from "react";
import "./webdevelopment.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const WebDevelopment = () => {
  return (
    <>
      {/* navbar */}
      <Header/>

      {/* content here */}
      <div style={{ height: "600px" }}>
        <div>WebDevelopment</div>
      </div>

      {/* footer */}
      <Footer/>
    </>
  );
};

export default WebDevelopment;
