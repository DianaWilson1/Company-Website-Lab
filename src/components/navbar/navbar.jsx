import React from "react";
import './navbar.css';

const Navbar = ({ onNavigate }) => {
  const handleClick = (event, section) => {
    event.preventDefault();
    onNavigate(section);
  };

  return (
    <nav id="top-navbar">
      <a href="#" onClick={(event) => handleClick(event, 'home')}>Home</a>
      <a href="#" onClick={(event) => handleClick(event, 'companyHistory')}>Company History</a>
      <a href="#" onClick={(event) => handleClick(event, 'pastWork')}>Past Work</a>
      <a href="#" onClick={(event) => handleClick(event, 'staff')}>Staff</a>
      <a href="#" onClick={(event) => handleClick(event, 'contact')}>Contact Us</a>
      <a href="#" onClick={(event) => handleClick(event, 'externalLinks')}>External Links</a>
    </nav>
  );
};

export default Navbar;
