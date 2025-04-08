import React from "react";
import './externalLinks.css';
const ExternalLinks = ({ src, alt }) => {
  return <div className="image">
    <img src={src} alt={alt} />
  </div >
};
export default ExternalLinks
