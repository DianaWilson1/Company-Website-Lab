import React from "react";
import './externalLinks.css';

const ExternalLinks = ({ src, alt }) => {
 
  return (
    <div className="external-link-item"> 
      <img src={src} alt={alt} /> 
    </div>
  );
};

export default ExternalLinks; 