import React from "react";
import "./style.css"; // Loader styles

const LoaderPorfolio = () => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p>Loading Portfolio...</p>
    </div>
  );
};

export default LoaderPorfolio;
