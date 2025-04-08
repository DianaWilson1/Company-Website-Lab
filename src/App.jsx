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
    {
      name: 'Jane Doe',
      address: '123 Innovation Way, San Francisco, CA 94107',
      email: 'jane.doe@example.com',
      employmentHistory: 'Former Software Engineer at TechNova, Project Lead at DevSpace',
      hobbies: ['Hiking', 'Photography', 'Board Games'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      imgAlt: 'Microsoft logo',
    },
    {
      name: 'John Smith',
      address: '456 Digital Dr, New York, NY 10001',
      email: 'john.smith@example.com',
      employmentHistory: 'UX Designer at PixelPerfect, Front-End Dev at UIFlow',
      hobbies: ['Sketching', 'Cycling', 'Indie Film Making'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png',
      imgAlt: 'Apple logo',
    },
    {
      name: 'Emily Chen',
      address: '789 Cloud Ave, Seattle, WA 98101',
      email: 'emily.chen@example.com',
      employmentHistory: 'Cloud Architect at SkyBase, Developer at NetSphere',
      hobbies: ['Cooking', '3D Printing', 'Travel Blogging'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png',
      imgAlt: 'Google logo',
    },
    {
      name: 'Carlos Ramirez',
      address: '321 Tech Park Blvd, Austin, TX 73301',
      email: 'carlos.ramirez@example.com',
      employmentHistory: 'Data Analyst at InfoCore, BI Specialist at Dashlytics',
      hobbies: ['Soccer', 'Drone Racing', 'Podcasting'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Logo_of_Twitter.svg',
      imgAlt: 'Twitter logo',
    },
    {
      name: 'Ava Patel',
      address: '654 Silicon Blvd, Palo Alto, CA 94301',
      email: 'ava.patel@example.com',
      employmentHistory: 'QA Engineer at TestGuru, DevOps Specialist at CloudNest',
      hobbies: ['Yoga', 'Gardening', 'Writing Fiction'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
      imgAlt: 'Netflix logo',
    },
  ];

  const [activeSection, setActiveSection] = useState('home');

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  const renderImageGrid = () => (
    <div className="external-links-grid">
      {employeeProfiles.map((profile, index) => (
        <ExternalLinks key={index} src={profile.img} alt={profile.imgAlt} />
      ))}
    </div>
  );

  return (
    <div className="app-container">
      <Navbar onNavigate={handleNavigation} />

      {/* --- Conditionally Rendered Content Sections --- */}

      {activeSection === 'home' && (
        <section className="home-section">
          <h3>Welcome to FutureWave Technologies Inc.</h3>
          <p>
            FutureWave Technologies Inc. is a forward-thinking software solutions company
            dedicated to driving innovation in the digital landscape. Based in California,
            we specialize in cloud computing, AI-driven platforms, and scalable tech
            infrastructure for businesses of all sizes. Our mission is to empower
            organizations through smart, seamless, and future-ready technology —
            helping them stay ahead in an ever-evolving world.
          </p>
        </section>
      )}

      {activeSection === 'companyHistory' && (
        <section className="CompanyHistory">
           <h2>Company History</h2>
          <CompanyHistory />
        </section>
      )}

      {activeSection === 'staff' && (
        <section className="staff-section-container">
          <h2>Our Staff</h2>
          <div className="EmployData">
            {employeeProfiles.map((profile, index) => (
              <EmployData
                key={index}
                name={profile.name}
                email={profile.email}
                hobbies={profile.hobbies}
              />
            ))}
          </div>
        </section>
      )}

      {/* Past Work Section - Added wrapper div for flex layout */}
      {activeSection === 'pastWork' && (
        <section className="PastWork">
          <h2>Past Work Examples</h2>
          <div className="past-work-container">
            {employeeProfiles.map((profile, index) => (
              <PastWork
                key={index}
                name={profile.name}
                employmentHistory={profile.employmentHistory}
              />
            ))}
          </div>
        </section>
      )}

      {activeSection === 'contact' && (
        <section className="CompanyInformation">
          <h2>Contact Information</h2>
          <CompanyInformation />
        </section>
      )}

      {activeSection === 'externalLinks' && (
        <section className="external-links-section">
          <h2>External Links / Partners</h2>
          {renderImageGrid()}
        </section>
      )}
    </div>
  );
};

export default App;