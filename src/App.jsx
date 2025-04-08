// src/App.jsx
import { useState } from 'react';
import './App.css';
import CompanyHistory from "./components/companyHistory/companyHistory.jsx";
import CompanyInformation from "./components/contactUs/companyInformation.jsx";
import ExternalLinks from "./components/externalLinks/externalLinks.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import PastWork from './components/pastWork/pastWork.jsx';
import EmployData from './components/staff/staff.jsx';
const App = () => {
  const employeeProfiles = [
    // Keep your employeeProfiles array as is
    {
      name: 'Jane Doe',
      address: '123 Innovation Way, San Francisco, CA 94107',
      email: 'jane.doe@example.com',
      employmentHistory: 'Former Software Engineer at TechNova, Project Lead at DevSpace',
      hobbies: ['Hiking', 'Photography', 'Board Games'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      imgAlt: 'Microsoft logo',
      ContactUs: 'contact@fakecompany.com',
    },
    {
      name: 'John Smith',
      address: '456 Digital Dr, New York, NY 10001',
      email: 'john.smith@example.com',
      employmentHistory: 'UX Designer at PixelPerfect, Front-End Dev at UIFlow',
      hobbies: ['Sketching', 'Cycling', 'Indie Film Making'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png',
      imgAlt: 'Apple logo',
      ContactUs: 'support@fakecompany.com',
    },
    {
      name: 'Emily Chen',
      address: '789 Cloud Ave, Seattle, WA 98101',
      email: 'emily.chen@example.com',
      employmentHistory: 'Cloud Architect at SkyBase, Developer at NetSphere',
      hobbies: ['Cooking', '3D Printing', 'Travel Blogging'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png',
      imgAlt: 'Google logo',
      ContactUs: 'hello@fakecompany.com',
    },
    {
      name: 'Carlos Ramirez',
      address: '321 Tech Park Blvd, Austin, TX 73301',
      email: 'carlos.ramirez@example.com',
      employmentHistory: 'Data Analyst at InfoCore, BI Specialist at Dashlytics',
      hobbies: ['Soccer', 'Drone Racing', 'Podcasting'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
      imgAlt: 'Twitter logo',
      ContactUs: 'team@fakecompany.com',
    },
    {
      name: 'Ava Patel',
      address: '654 Silicon Blvd, Palo Alto, CA 94301',
      email: 'ava.patel@example.com',
      employmentHistory: 'QA Engineer at TestGuru, DevOps Specialist at CloudNest',
      hobbies: ['Yoga', 'Gardening', 'Writing Fiction'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg',
      imgAlt: 'Netflix logo',
      ContactUs: 'info@fakecompany.com',
    },
  ];
  // State to track which section is currently visible
  // Initialize to 'home' so the welcome message shows first
  const [activeSection, setActiveSection] = useState('home');
  // Function to update the active section state
  const handleNavigation = (section) => {
    setActiveSection(section);
  };
  // Helper function to render the image grid (used in two places now)
  const renderImageGrid = () => (
    <div className="image-grid">
      {employeeProfiles.map((profile, index) => (
        <ExternalLinks key={index} src={profile.img} alt={profile.imgAlt} />
      ))}
    </div>
  );
  return (
    <div className="app-container">
      {/* Pass the navigation handler function to Navbar */}
      <Navbar onNavigate={handleNavigation} />
      {/* --- Conditionally Rendered Sections --- */}
      {/* Home Section */}
      {activeSection === 'home' && (
        <main>
          <h3>Welcome to FutureWave Technologies Inc.</h3>
          <p>
            FutureWave Technologies Inc. is a forward-thinking software solutions company
            dedicated to driving innovation in the digital landscape. Based in California,
            we specialize in cloud computing, AI-driven platforms, and scalable tech
            infrastructure for businesses of all sizes. Our mission is to empower
            organizations through smart, seamless, and future-ready technology —
            helping them stay ahead in an ever-evolving world.
          </p>
        </main>
      )}
      {/* Company History Section */}
      {activeSection === 'companyHistory' && (
        <section className="CompanyHistory">
          <CompanyHistory />
          {/* You might include the image grid here or make it separate */}
          {/* renderImageGrid() */}
        </section>
      )}
      {/* Staff Section */}
      {activeSection === 'staff' && (
        <section className="EmployData">
          <h2>Our Staff</h2>
          {employeeProfiles.map((profile, index) => (
            <EmployData key={index} name={profile.name} email={profile.email} hobbies={profile.hobbies} />
          ))}
        </section>
      )}
      {/* Past Work Section */}
      {activeSection === 'pastWork' && (
        <section className="PastWork">
          <h2>Past Work Examples</h2>
          {employeeProfiles.map((profile, index) => (
            <PastWork key={index} name={profile.name} employmentHistory={profile.employmentHistory} />
          ))}
        </section>
      )}
      {/* Contact Us Section */}
      {activeSection === 'contact' && (
        <section className="CompanyInformation">
          <h2>Contact Information</h2>
          <CompanyInformation />
          {/* This mapping seems to duplicate contact info - maybe adjust? */}
          {/* {employeeProfiles.map((profile, index) => (
             <ContactUs key={index} name={profile.name} email={profile.email} />
           ))} */}
        </section>
      )}
      {/* External Links Section (showing only the image grid) */}
      {activeSection === 'externalLinks' && (
        <section className="ExternalLinksGrid">
          <h2>External Links / Partners</h2>
          {renderImageGrid()}
        </section>
      )}
      {/* Removed the toggle button and the always-visible 'body' div wrapper */}
      {/* The conditional rendering above handles showing/hiding */}
    </div>
  );
};
export default App;
