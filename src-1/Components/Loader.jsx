import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <img src="/logo.webp" alt="STERS Logo" className="loader-logo" />

      <div className="progress-bar">
        <div className="progress"></div>
      </div>

      <p className="progress-p">Preparing your learning experience...</p>
    </div>
  );
};

export default Loader;
