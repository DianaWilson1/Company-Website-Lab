import { useState } from 'react';
import './App.css';
import CompanyHistory from "./components/companyHistory/companyHistory.jsx";
import CompanyInformation from "./components/contactUs/companyInformation.jsx";
import ContactUs from './components/contactUs/contactUs.jsx';
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
      ContactUs: 'contact@fakecompany.com',
    },
    {
      name: 'John Smith',
      address: '456 Digital Dr, New York, NY 10001',
      email: 'john.smith@example.com',
      employmentHistory: 'UX Designer at PixelPerfect, Front-End Dev at UIFlow',
      hobbies: ['Sketching', 'Cycling', 'Indie Film Making'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png',
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
      img: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Logo_of_Twitter.svg',
      imgAlt: 'Twitter logo',
      ContactUs: 'team@fakecompany.com',
    },
    {
      name: 'Ava Patel',
      address: '654 Silicon Blvd, Palo Alto, CA 94301',
      email: 'ava.patel@example.com',
      employmentHistory: 'QA Engineer at TestGuru, DevOps Specialist at CloudNest',
      hobbies: ['Yoga', 'Gardening', 'Writing Fiction'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
      imgAlt: 'Netflix logo',
      ContactUs: 'info@fakecompany.com',
    },
  ];
  // mport React, { useState } from 'react';
  //   function ToggleInfo() {
  //     const [isVisible, setIsVisible] = useState(false);
  //     const toggleInfo = () => {
  //       setIsVisible(!isVisible);
  //     };
  //     return (
  //       <div className="p-4">
  //         <button onClick={toggleInfo} className="bg-blue-500 text-white px-4 py-2 rounded">
  //           {isVisible ? 'Hide Info' : 'Show Info'}
  //         </button>
  //         {isVisible && (
  //           <div className="mt-4 bg-gray-100 p-4 rounded shadow">
  //             <p>This is the information that
  const [isVisible, setIsVisible] = useState(true); // using boolean

  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
  };



  return (
    <div className="app-container">
      <Navbar />

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
      <button onClick={toggleVisibility}>Invisible</button>
      <div className='body' style={{ display: isVisible }}>


        <section className="CompanyHistory">
          <CompanyHistory />
          <div className="image-grid">
            {employeeProfiles.map((profile, index) => (
              <ExternalLinks key={index} src={profile.img} alt={profile.imgAlt} />
            ))}
          </div>
        </section>

        <section className="EmployData">
          {employeeProfiles.map((profile, index) => (
            <EmployData key={index} name={profile.name} email={profile.email} hobbies={profile.hobbies} />
          ))}
        </section>

        <section className="PastWork">
          {employeeProfiles.map((profile, index) => (
            <PastWork key={index} name={profile.name} employmentHistory={profile.employmentHistory} />
          ))}
        </section>

        <section className="CompanyInformation">
          <CompanyInformation />
          {employeeProfiles.map((profile, index) => (
            <ContactUs key={index} name={profile.name} email={profile.email} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default App;
