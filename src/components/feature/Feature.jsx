import React from "react";

import "./feature.css";

const Feature = ({ title, text }) => (
  <div className="AS__features-container__feature">
    <div className="AS__features-container__feature-title">
      <h1>{title}</h1>
    </div>
    <div className="AS__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
