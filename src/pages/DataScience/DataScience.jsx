import React from "react";
import "./datascience.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const DataScience = () => {
  return (
    <>
      {/* navbar */}
      <Header/>

      {/* content here */}
      <div style={{ height: "600px" }}>
        <div>Datascience</div>
      </div>

      {/* footer */}
      <Footer/>
    </>
  );
};

export default DataScience;
